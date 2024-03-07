import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";
import { DatabaseModule } from "../database/database.module";
import { EmployerModule } from "../employer/employer.module";
import { employerProviders } from "../employer/employer.providers";
import { EmployerService } from "../employer/employer.service";
import { UserController } from "./user.controller";
import { User } from "./User.entity";
import { userProviders } from "./user.providers";
import { UserService } from "./user.service";

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    EmployerModule,
  ],
  controllers: [UserController],
  providers: [
    ...userProviders,
    ...employerProviders, 
    UserService, 
    EmployerService],
  exports: [UserService],
})

export class UserModule{}