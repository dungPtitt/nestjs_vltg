import { Module } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DatabaseModule } from "../database/database.module";
import { MailModule } from "../mail/mail.module";
import { MailService } from "../mail/mail.service";
import { UserModule } from "../user/user.module";
import { EmployerController } from "./employer.controller";
import { employerProviders } from "./employer.providers";
import { EmployerService } from "./employer.service";


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    MailModule,
  ],
  controllers: [EmployerController],
  providers: [...employerProviders, EmployerService, MailService],
  exports: [EmployerService]
})

export class EmployerModule {

}