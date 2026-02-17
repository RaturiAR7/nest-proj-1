import { Module } from '@nestjs/common';
import { BillsController } from './bill.controller';
import { BillsService } from './bill.service';
import { KitchenModule } from '../kitchen/kitchen.module';

@Module({
  imports: [KitchenModule], // Needs the Kitchen to see orders!
  controllers: [BillsController],
  providers: [BillsService],
})
export class BillModule {}
