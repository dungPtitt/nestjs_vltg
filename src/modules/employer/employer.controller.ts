import { Body, Controller, Get, Post } from "@nestjs/common";
import { Public } from "../auth/auth.guard";
import { Employer } from "./employer.entity";
import { EmployerService } from "./employer.service";

@Controller('employer')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {

  }

  @Public()
  @Post('register')
  register(@Body() employer: Employer): Promise<{}> {
    return this.employerService.register(employer);
  }

  @Public()
  @Post('login')
  login(@Body() employer: Record<string, string>)  {
    return this.employerService.login(employer.email, employer.password);
  }
}