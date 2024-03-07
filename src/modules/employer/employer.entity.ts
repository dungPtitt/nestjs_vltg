import { Expose } from "class-transformer";
import { IsNumber, IsString } from "class-validator";
import { Column, Entity, OneToMany } from "typeorm";
import { Job } from "../job/job.entity";
import { User } from "../user/User.entity";

@Entity('Employer')

export class Employer extends User {

  @OneToMany(() => Job, (job) => job.user)
  @Expose()
  jobs: Job[]

  @Column({default: null})
  @Expose()
  quy_mo: string

  //ma so thue
  @Column({default: null})
  @Expose()
  mst: string

  // @Column({default: null})
  // website: string

  // @Column({default: null})
  // gioi_thieu: string

  // @Column({default: 0})
  // diem_free: number

  // @Column({default: 0})
  // diem_mua: number
}