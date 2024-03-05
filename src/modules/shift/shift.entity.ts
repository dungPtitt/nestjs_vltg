import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Job } from "../job/job.entity";

@Entity('Shift')
export class Shift {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Job, (job) => job.shifts)
  job: Job

  // @Column()
  // @IsNotEmpty()
  // @IsNumber()
  // @Expose()
  // id_job: number;

  @Column({default: null})
  @IsString()
  @IsNotEmpty()
  @Expose()
  start_time: string;

  @Column({default: null})
  @IsString()
  @IsNotEmpty()
  @Expose()
  end_time: string;

  @Column({default: null})
  @IsString()
  @IsNotEmpty()
  @Expose()
  day: string;
}
