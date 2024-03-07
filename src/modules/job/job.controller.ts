import { Body, Controller, ExecutionContext, Get, Post, Req } from "@nestjs/common";
import { EmployerService } from "../employer/employer.service";
import { Job } from "./job.entity";
import { JobService } from "./job.service";

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService, private readonly employerService: EmployerService) {
  }


  @Post('create')
  async createJob(@Req() req, @Body() job: Job): Promise<{}> {
    if(req.user && req.user.id) {
      const idEmployer = req.user.id
      const employer = await this.employerService.findOne(idEmployer)
      // this.
      job.user = employer;
      const list_shift: Array<{}> = req.body.list_shift;
      if(!list_shift) {
        return {"codeStatus": 400, "errorMessage": "Missing input list_shift"};
      }
      return this.jobService.createJob(job, list_shift);
    }
    return {"codeStatus": 400, "message": "Missing input in token"}
  }


  @Get('getListJobOfEmployer')
  getListJob(@Req() req): Promise<{}> {
    return this.jobService.getListJobOfEmployer(req);
  }
}