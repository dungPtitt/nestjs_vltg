import { DataSource } from 'typeorm';
import { Apply } from '../apply/apply.entity';
import { Candidate } from '../candidate/candidate.entity';
import { Employer } from '../employer/employer.entity';
import { Job } from '../job/job.entity';
import { Shift } from '../shift/shift.entity';
import { User } from '../user/User.entity';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5434,
        username: 'postgres',
        password: '123456',
        database: 'vltg_db',
        synchronize: true,
        logging: 'all',
        logger: 'advanced-console',
        entities: [User, Employer, Candidate, Job, Shift, Apply],
        migrations: [],
        subscribers: [],
      });
      return dataSource.initialize();
    },
  },
];
