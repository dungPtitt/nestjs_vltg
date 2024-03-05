import { Expose } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity('User')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsEmail()
  @Expose()
  email: string;

  @Column()
  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  @Expose()
  phone: string;
  
  @Column()
  @IsNotEmpty()
  @IsString()
  @Expose()
  userName: string;

  @Column({
    default: null
  })
  @IsString()
  @Expose()
  alias: string;

  @Column({
    default: null
  })
  avatar: string;

  //0: ca nhan, 1: nha tuyen dung
  @Column({
    default: 0
  })
  type: number;

  @Column()
  @IsNotEmpty()
  password: number;

  @Column()
  @IsNumber()
  city: number;

  @Column({
    default: null
  })
  @IsNumber()
  district: number;

  @Column({
    default: true
  })
  @IsString()
  address: string;

  @Column({
    default: true
  })
  @IsString()
  opt: string;

  @Column({
    default: 0
  })
  @IsNumber()
  authentic: number;

  @Column({
    default: 0
  })
  @IsNumber()
  isOnline: number;

  @Column({
    default: null
  })
  dob: string;

  @Column({
    default: 0
  })
  @IsNumber()
  gender: number;

  @Column({
    default: 0
  })
  @IsNumber()
  isMarried: number;

}
