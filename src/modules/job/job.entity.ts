import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Apply } from "../apply/apply.entity";
import { Employer } from "../employer/employer.entity";
import { Shift } from "../shift/shift.entity";
import { User } from "../user/User.entity";

@Entity('Job')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employer, (employer) => employer.jobs)
  user: Employer

  @OneToMany(() => Shift, (shift) => shift.job)
  shifts: Shift[]

  @OneToMany(() => Apply, apply => apply.job)
  public apply: Apply[];
  
  @Column()
  @IsString()
  @IsNotEmpty()
  @Expose()
  vi_tri: string;

  @Column({default: null})
  @IsString()
  @Expose()
  alias: string;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  hoc_van: number;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  tra_luong: number;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  dia_diem: number;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  quan_huyen: number;

  //0: theo gio, fulltime
  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  hinh_thuc: number;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  muc_luong: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  hoa_hong: string;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  so_luong: Number;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  mo_to: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  yeu_cau: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  quyen_loi: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  ho_so: string;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  luot_xem: number;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  name_lh: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  phone_lh: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  address_lh: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  email_lh: string;

  @Column({
    default: 0
  })
  @IsNumber()
  @Expose()
  active: number;
}
