import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { EmployerModule } from "../employer/employer.module";
import { ShiftModule } from "../shift/shift.module";
import { JobController } from "./job.controller";
import { jobProviders } from "./job.providers";
import { JobService } from "./job.service";

@Module({
  imports: [
    DatabaseModule,
    EmployerModule,
    ShiftModule
  ],
  controllers: [JobController],
  providers: [...jobProviders, JobService],
  exports: [JobService]
})
export class JobModule {

}