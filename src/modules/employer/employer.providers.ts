import { DataSource } from "typeorm";
import { Employer } from "./employer.entity";

export const employerProviders = [
  {
    provide: 'EMPLOYER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Employer),
    inject: ['DATA_SOURCE']
  }
]