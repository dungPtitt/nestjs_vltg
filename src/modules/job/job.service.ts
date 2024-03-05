import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { DatabaseService } from "../database/database.service";
import { Job } from "./job.entity";

@Injectable()
export class JobService extends DatabaseService<Job> {
  constructor(@Inject('JOB_REPOSITORY') private readonly jobRepository: Repository<Job>) {
    super(jobRepository)
  }
}