import { DataSource } from "typeorm";
import { Shift } from "./shift.entity";

export const shiftProviders = [
  {
    provide: 'SHIFT_REPOSITORY',
    useFactory: (dataSource: DataSource)=> dataSource.getRepository(Shift),
    inject: ['DATA_SOURCE']
  }
]