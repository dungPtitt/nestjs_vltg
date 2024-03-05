import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { DatabaseService } from "../database/database.service";
import { Shift } from "./shift.entity";

@Injectable()
export class ShiftService extends DatabaseService<Shift> {
  constructor(@Inject('SHIFT_REPOSITORY') private readonly shiftRepository: Repository<Shift>) {
    super(shiftRepository)
  }
}