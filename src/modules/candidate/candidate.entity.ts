import { IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Apply } from "../apply/apply.entity";
import { Job } from "../job/job.entity";
import { User } from "../user/User.entity";

@Entity('Candidate')

export class Candidate extends User {

  @OneToMany(() => Apply, apply => apply.candidate)
  public apply: Apply[];

  @Column({default: null})
  @IsString()
  uv_day: string

  //ma so thue
  @Column({default: 0})
  @IsNumber()
  luot_xem: number
}