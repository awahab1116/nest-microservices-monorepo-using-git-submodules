import { Controller, Post, Body, Inject, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LOGIN_USER_EVENT, REGISTER_USER_EVENT } from '@microservice/common';
//import { User } from '@microservice/common';

@Controller()
export class AuthController {
  constructor(
    @Inject('AUTH_MICROSERVICE') private readonly auth_client: ClientProxy,
  ) {}

  @Post(REGISTER_USER_EVENT)
  registerUser(@Body() userData) {
    // console.log('Hello');
    const name = userData.name;
    const email = userData.email;
    const password = userData.password;
    const phone = userData.phone;
    return this.auth_client.send(
      { cmd: REGISTER_USER_EVENT },
      { name, email, password, phone },
    );
  }

  @Post(LOGIN_USER_EVENT)
  loginUser(@Body() userData) {
    const email = userData.email;
    const password = userData.password;
    return this.auth_client
      .send({ cmd: LOGIN_USER_EVENT }, { email, password })
      .pipe(catchError((val) => of({ error: val.message })));
  }
}
