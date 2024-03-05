import { IsNumber, IsString } from "class-validator";
import { Column, Entity, OneToMany } from "typeorm";
import { Job } from "../job/job.entity";
import { User } from "../user/User.entity";

@Entity('Employer')

export class Employer extends User {

  @OneToMany(() => Job, (job) => job.user)
    jobs: Job[]

  @Column({default: null})
  @IsString()
  quy_mo: string

  //ma so thue
  @Column({default: null})
  @IsString()
  mst: string

  @Column({default: null})
  @IsString()
  website: string

  @Column({default: null})
  @IsString()
  gioi_thieu: string

  @Column({default: 0})
  @IsNumber()
  diem_free: number

  @Column({default: 0})
  @IsNumber()
  diem_mua: number
}