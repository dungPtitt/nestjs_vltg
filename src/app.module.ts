import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { EmployerModule } from './modules/employer/employer.module';
import { JobModule } from './modules/job/job.module';
import { ShiftModule } from './modules/shift/shift.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    JobModule,
    ShiftModule,
    AppModule,
    EmployerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
