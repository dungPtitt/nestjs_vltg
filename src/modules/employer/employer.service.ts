import { BadRequestException, Inject, Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import { Repository } from "typeorm";
import { DatabaseService } from "../database/database.service";
import { Employer } from "./employer.entity";
import * as bcrypt from 'bcrypt';
import { AuthService } from "../auth/auth.service";
import { Cron, CronExpression } from "@nestjs/schedule";
import { MailService } from "../mail/mail.service";

const saltOrRounds = 10;

@Injectable()
export class EmployerService extends DatabaseService<Employer>{
  private readonly logger = new Logger(EmployerService.name);
  constructor(
    @Inject('EMPLOYER_REPOSITORY')
    private readonly employerRepo: Repository<Employer>,
    private authService: AuthService,
    private mailService: MailService
  ) {
    super(employerRepo)
  }

  async createEmployer(employer: Employer): Promise<{}> {
    return {"message": "annn"}
  }

  async register(employerDto: Employer): Promise<{}> {

    const password =employerDto.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    employerDto.password = hash;
    
    const createUser = await this.employerRepo.save(employerDto);
    const payload = {sub: createUser.id, username: createUser.userName};
    // const payload = { sub: password};
    return {
      access_token: await this.authService.createToken(payload),
    };
  }

  async login(email: string, password: string): Promise<any> {
    const user = await this.employerRepo.findOne({where: {email: email}})
    if (!user) {
      throw new UnauthorizedException();
    }else if(user.type!=1) {
      throw new UnauthorizedException();
    }
    else{
      const isMatch = await bcrypt.compare(password, user.password);
      console.log("isMatch:....", isMatch);
      if(!isMatch) {
        throw new UnauthorizedException();
      }
    }
    // TODO: Generate a JWT and return it here
    // instead of the user object
    const token = await this.authService.createToken(user)
    this.mailService.sendUserConfirmation(user, "....")
    return {
      token: token
    };
  }
  
  // @Cron('45 * * * * *')
  @Cron(CronExpression.EVERY_30_SECONDS)
  handleCronNotify() {
    console.log("cron job.....")
    this.logger.debug('Called every 30 seconds');
  }
}