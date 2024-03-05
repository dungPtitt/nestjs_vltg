import { Module } from "@nestjs/common";
import { DatabaseModule } from "../database/database.module";
import { JobController } from "./job.controller";
import { jobProviders } from "./job.providers";
import { JobService } from "./job.service";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [JobController],
  providers: [...jobProviders, JobService],
  exports: [JobService]
})
export class JobModule {

}