import { Module } from '@nestjs/common';

import { AuthModule } from './auth/auth.module';
import { ErrorInterceptor } from './app.interceptor';

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [
    // {
    //   provide: 'APP_INTERTCEPTOR',
    //   useClass: ErrorInterceptor,
    // },
  ],
})
export class AppModule {}
