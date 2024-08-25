import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private jwtService: JwtService,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];
   
    try {
      const decoded = this.jwtService.decode(token) as { username: string };
      const user = await this.authService.validateUser(decoded.username);
      if (!user) {
        return false;
      }
      request.user = user;
      return true;
    } catch (error) {
      return false;
    }
  }
}
