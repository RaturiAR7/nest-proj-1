import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { KitchenModule } from './kitchen/kitchen.module';
import { BillModule } from './bill/bill.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [KitchenModule, BillModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
