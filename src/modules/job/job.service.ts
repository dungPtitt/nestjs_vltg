import { Inject, Injectable, Req } from "@nestjs/common";
import { Repository } from "typeorm";
import { DatabaseService } from "../database/database.service";
import { Shift } from "../shift/shift.entity";
import { ShiftService } from "../shift/shift.service";
import { Job } from "./job.entity";
@Injectable()
export class JobService extends DatabaseService<Job> {
  constructor(
    @Inject('JOB_REPOSITORY') 
    private readonly jobRepository: Repository<Job>,
    private readonly shiftService: ShiftService
    ) {
    super(jobRepository)
  }
  
  async createJob(job: Job, list_shift: Array<{}>): Promise<{}> {
    const jobSave = await this.create(job);
    for(let i=0; i<list_shift.length; i++) {
      let shift = list_shift[i]
      shift["job"] = jobSave;
      await this.shiftService.create(shift);
    }
    return job;
  }
  async getListJobOfEmployer(req: any): Promise<{}> {
    const userId = req.user.id
    let page = 1;
    let pageSize = 10;
    if(req?.query?.page) {
      page = req.query.page
    }
    if(req?.query?.pageSize) {
      pageSize = req.query.pageSize
    }
    console.log("userId", userId)
    const listJob = await this.jobRepository
    .createQueryBuilder('job')
    .leftJoinAndSelect('job.user', 'user')
    .leftJoinAndSelect('job.shifts', 'shifts')
    .where('job.userId = :userId', { userId})
    .offset((page-1)*pageSize)
    .limit(pageSize)
    .getMany()
    // .getRawMany()

    const count = await this.jobRepository
    .createQueryBuilder("job")
    .leftJoinAndSelect('job.user', 'user')
    .where('job.userId = :userId', { userId})
    .getCount()
    return {count, listJob};
  }
}
