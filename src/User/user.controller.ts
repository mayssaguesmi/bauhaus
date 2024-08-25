import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.schema';


@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  async createUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.createUser(userData);
  }

  // Autres endpoints comme la connexion, etc.
}
