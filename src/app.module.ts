import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { KitchenModule } from './kitchen/kitchen.module';
import { BillModule } from './bill/bill.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { UserModule } from './user/user.module';

@Module({
  imports: [KitchenModule, BillModule, UserModule],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
