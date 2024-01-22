import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { User } from './entity/user.entity';
import { RegisterUserDto, LoginUserDto } from './auth.dto';
import { LOGIN_USER_EVENT, REGISTER_USER_EVENT } from '@microservice/common';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @MessagePattern({ cmd: REGISTER_USER_EVENT })
  async registerUser(@Payload() message: RegisterUserDto): Promise<User> {
    return await this.authService.registerUser(message);
  }

  @MessagePattern({ cmd: LOGIN_USER_EVENT })
  async loginUser(@Payload() message: LoginUserDto): Promise<any> {
    return await this.authService.loginUser(message);
  }
}
