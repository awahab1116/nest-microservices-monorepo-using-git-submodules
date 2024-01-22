import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { User } from './entity/user.entity';
import { RegisterUserDto, LoginUserDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';
import {
  LoginPasswordInvalidException,
  UserNotFoundException,
} from './auth-errors.exception';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async registerUser(registerUserDto: RegisterUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    console.log('Salt is ', salt);
    const hashedPassword = await bcrypt.hash(registerUserDto.password, salt);
    const user: User = new User();
    user.firstName = registerUserDto.firstName;
    user.lastName = registerUserDto.lastName;
    user.email = registerUserDto.email;
    user.password = hashedPassword;
    user.createdAt = new Date();
    user.updatedAt = new Date();
    return this.userRepository.save(user);
  }

  async loginUser(loginUserDto: LoginUserDto): Promise<any> {
    const user = await this.userRepository.findOne({
      where: {
        email: loginUserDto.email,
      },
    });

    if (!user) {
      throw new RpcException('user not found');
      // throw new UserNotFoundException();
    }

    const isPasswordMatched = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    );

    if (!isPasswordMatched) {
      throw new LoginPasswordInvalidException('Provided password not correct');
    }
    const { password, ...result } = user;
    const payload = { id: user.id, email: user.email };
    const access_token = await this.jwtService.signAsync(payload);

    return {
      user: result,
      access_token,
    };
  }
}
