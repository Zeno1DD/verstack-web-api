import { Injectable, UnauthorizedException } from '@nestjs/common';


@Injectable()
export class AuthService {
  async login(username: string, password: string): Promise<any> {
    if (username === 'admin' && password === '123456') {
      return {
        message: 'Успешный вход',
        success: true,
        user: {
          username,
          role: 'admin',
        },
        token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDUxNDc0ODgsImV4cCI6MTc3NjY4MzQ4OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJSb2xlIjpbImFkbWluIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.uegFVTJqTKqf-IJP5zDaQ5YQz8yMLClhhDBPVXFaR4nywgzhei8VxGQWGP04XYJsWQuaJ8asyprMnWyGCrV0jw',
      };
    }
    throw new UnauthorizedException('Неверные логин или пароль!');
  }
  async isLogin(jwt: string): Promise<any> {
  if (jwt === 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3NDUxNDc0ODgsImV4cCI6MTc3NjY4MzQ4OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJSb2xlIjpbImFkbWluIiwiUHJvamVjdCBBZG1pbmlzdHJhdG9yIl19.uegFVTJqTKqf-IJP5zDaQ5YQz8yMLClhhDBPVXFaR4nywgzhei8VxGQWGP04XYJsWQuaJ8asyprMnWyGCrV0jw'){
    return {
      success: true,
    }}
      throw new UnauthorizedException('Неправильный JWT');
  }
}
