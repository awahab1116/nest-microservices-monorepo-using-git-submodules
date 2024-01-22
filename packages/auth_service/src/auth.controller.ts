import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { User } from './entity/user.entity';
import { RegisterUserDto, LoginUserDto } from './auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @MessagePattern({ cmd: 'register_user' })
  async registerUser(@Payload() message: RegisterUserDto): Promise<User> {
    return await this.authService.registerUser(message);
  }

  @MessagePattern({ cmd: 'login_user' })
  async loginUser(@Payload() message: LoginUserDto): Promise<any> {
    return await this.authService.loginUser(message);
  }
}
