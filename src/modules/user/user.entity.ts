import { Expose } from "class-transformer";
import { IsDate, IsEmail, IsNotEmpty, IsNumber, IsPhoneNumber, IsString, Length } from "class-validator";
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
  // @IsPhoneNumber()
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
  @Length(8, 26)
  password: string;

  @Column({default: null})
  city: number;

  @Column({
    default: null
  })
  district: number;

  @Column({
    default: null
  })
  address: string;

  @Column({
    default: null
  })
  opt: string;

  @Column({
    default: 0
  })
  authentic: number;

  @Column({
    default: 0
  })
  isOnline: number;

  @Column({
    default: null
  })
  dob: string;

  @Column({
    default: 0
  })
  gender: number;

  @Column({
    default: 0
  })
  isMarried: number;

}
