import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<any> {
    if (username === 'admin' && password === '123456') {
      return {
        message: 'Успешный вход',
        user: {
          username, 
          role: 'admin',
        },
        token: 'jwt',
      };
    }
    throw new UnauthorizedException('Неверные логин или пароль!');
  }
}
