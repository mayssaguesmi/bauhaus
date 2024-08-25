import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { Project, ProjectSchema } from './portfolio.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';
import { User, UserSchema } from 'src/User/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),

    
  ],
  providers: [PortfolioService,JwtService,AuthService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
