import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: {username : string; password: string}) {
    return this.authService.login(body.username, body.password);
  }
  @Post('is_login')
  isLogin(@Body() body: {jwt: string}) {
    return this.authService.isLogin(body.jwt);
  }
}