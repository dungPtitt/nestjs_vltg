import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatabaseModule } from "../database/database.module";
import { UserModule } from "../user/user.module";
import { EmployerController } from "./employer.controller";
import { employerProviders } from "./employer.providers";
import { EmployerService } from "./employer.service";


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    // UserModule
  ],
  controllers: [EmployerController],
  providers: [...employerProviders, EmployerService],
  exports: [EmployerService]
})

export class EmployerModule {

}