import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Candidate } from "../candidate/candidate.entity";
import { Job } from "../job/job.entity";

@Entity('Apply')
export class Apply {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  id_candidate: number;

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  id_job: number;

  @ManyToOne(() => Candidate, (candidate) => candidate.apply)
  public candidate: Candidate

  @ManyToOne(() => Job, (job) => job.apply)
  public job: Job

  @Column()
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  shift: number;

  @Column({default: null})
  @IsString()
  @IsNotEmpty()
  @Expose()
  gio_lam: string;

  @Column({default: null})
  @IsString()
  @IsNotEmpty()
  @Expose()
  day: string;

  @Column({default: null})
  @IsString()
  @IsNotEmpty()
  @Expose()
  ghi_chu: string;

  @Column({default: 0})
  @IsNumber()
  @IsNotEmpty()
  @Expose()
  status: number;
}
