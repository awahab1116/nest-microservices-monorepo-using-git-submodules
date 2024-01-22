import {
  IsEmail,
  IsOptional,
  IsNotEmpty,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterUserDto {
  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'Firstname must have atleast 2 characters.' })
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(2, { message: 'Lastname must have atleast 2 characters.' })
  lastName: string;

  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password should have minimum 6 characters' })
  password: string;
}

export class LoginUserDto {
  @IsNotEmpty()
  @IsEmail(undefined, { message: 'Please provide valid Email.' })
  email: string;

  @IsNotEmpty()
  @MinLength(6, { message: 'Password should have minimum 6 characters' })
  password: string;
}
