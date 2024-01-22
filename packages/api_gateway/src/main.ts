import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ErrorInterceptor } from './app.interceptor';
// Importing the LOGIN_USER_EVENT constant from the submodule
//import { LOGIN_USER_EVENT } from './submodules/submodule-microservice';
// Importing LOGIN_USER_EVENT using path mapping
//import { LOGIN_USER_EVENT } from '';
//import { LOGIN_USER_EVENT } from 'submodules/submodule-microservice';
//import { LOGIN_USER_EVENT } from '@submodule/index';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //console.log('submodule ', LOGIN_USER_EVENT);
  // app.useGlobalInterceptors(new ErrorInterceptor());
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
