import { Body, Controller, Post } from "@nestjs/common";
import { Public } from "../auth/auth.guard";
import { User } from "./User.entity";
import { UserService } from "./user.service";

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService){
  }
  @Public()
  @Post('register')
  register(@Body() user: User): Promise<{}> {
    return this.userService.register(user);
  }

  @Public()
  @Post('login')
  login(@Body() loginDto: Record<string, any>): Promise<{}> {
    return this.userService.signIn(loginDto.userName, loginDto.password);
  }
}