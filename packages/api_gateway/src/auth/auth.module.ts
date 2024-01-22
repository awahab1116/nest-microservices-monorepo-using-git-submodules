import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ErrorInterceptor } from '../app.interceptor';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  controllers: [AuthController],
  providers: [
    // {
    //   provide: 'APP_INTERTCEPTOR',
    //   useClass: ErrorInterceptor,
    // },
  ],
})
export class AuthModule {}
