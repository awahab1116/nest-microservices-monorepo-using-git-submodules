import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor(message?: string, statusCode?: number) {
    super(message || 'User not found', statusCode || HttpStatus.NOT_FOUND);
  }
}

export class LoginPasswordInvalidException extends HttpException {
  constructor(message?: string, statusCode?: number) {
    super(
      message || 'Login Password invalid',
      statusCode || HttpStatus.UNAUTHORIZED,
    );
  }
}
