import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployerModule } from './modules/employer/employer.module';
import { JobModule } from './modules/job/job.module';
import { MailModule } from './modules/mail/mail.module';
import { ShiftModule } from './modules/shift/shift.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    UserModule,
    AuthModule,
    JobModule,
    ShiftModule,
    AppModule,
    EmployerModule,
    // MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
