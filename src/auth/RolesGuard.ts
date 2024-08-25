import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private authService: AuthService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return false;
    }

    try {
      const decoded = this.jwtService.verify(token); // Le secret est automatiquement utilisé ici
      const user = await this.authService.validateUser(decoded.username);

      if (!user) {
        return false;
      }

      request.user = user;
      return roles.includes(user.role); // Vérifie si le rôle de l'utilisateur est autorisé
    } catch (error) {
      return false;
    }
  }
}
