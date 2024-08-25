import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from 'src/User/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      secret: '123456', // Change this to a more secure key
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
