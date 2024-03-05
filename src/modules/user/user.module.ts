import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "../auth/auth.module";
import { AuthService } from "../auth/auth.service";
import { DatabaseModule } from "../database/database.module";
import { UserController } from "./user.controller";
import { User } from "./User.entity";
import { userProviders } from "./user.providers";
import { UserService } from "./user.service";

@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([User]),
    AuthModule,
  ],
  controllers: [UserController],
  providers: [...userProviders, UserService],
  exports: [UserService],
})

export class UserModule{}