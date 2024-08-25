import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto'; // Assure-toi que le chemin est correct
import { User } from 'src/User/user.schema';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto): Promise<User> {
    return this.authService.register(registerDto);
  }

  @Post('login')
  async login(@Body() loginDto: { username: string, password: string }): Promise<{ access_token: string }> {
    const access_token = await this.authService.login(loginDto.username, loginDto.password);
    return { access_token };
  }
}
