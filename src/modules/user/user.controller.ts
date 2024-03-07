import { BadRequestException, Body, Controller, ExecutionContext, Get, Post, Req, Res } from "@nestjs/common";
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
    if(user.type == 0) {
      return this.userService.register(user);
    } else if(user.type==1){
      
    }
    throw new BadRequestException();
  }

  @Public()
  @Post('login')
  login(@Body() loginDto: Record<string, any>): Promise<{}> {
    return this.userService.signIn(loginDto.userName, loginDto.password);
  }

  @Post('create')
  create(@Body() user: User): Promise<{}> {
    return this.userService.create(user);
  }

  @Get('listUser')
  async listUser(@Req() req): Promise<{}> {
    
    console.log("request>>>>>", req.user);
    let user = await this.userService.findAll();
    return user;
  }
}