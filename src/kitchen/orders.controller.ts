import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  // Waiter needs the Chef to work
  constructor(private chef: OrdersService) {}

  @Get('menu/:page')
  getMenu(@Param('page', ParseIntPipe) page: number) {
    console.log(`Waiter showing menu page ${page}`);
    return this.chef.getMenu(page);
  }

  @Post()
  takeOrder(@Body() createOrderDto: CreateOrderDto) {
    console.log(`Waiter took order for Table ${createOrderDto.tableNo}`);
    return this.chef.createOrder(createOrderDto);
  }

  @Get()
  listOrders() {
    return this.chef.getOrders();
  }
}
