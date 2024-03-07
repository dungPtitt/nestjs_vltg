import { Body, Controller, Post } from "@nestjs/common";
import { create } from "domain";
import { Shift } from "./shift.entity";
import { ShiftService } from "./shift.service";

@Controller('shift')
export class ShiftController {
  constructor(private readonly shiftService: ShiftService) {
    
  }

  @Post('create')
  async create(@Body() shift: Shift): Promise<{}> {
    return this.shiftService.create(shift);
  }
}