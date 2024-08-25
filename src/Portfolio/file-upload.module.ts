import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PortfolioService } from './portfolio.service';
import { PortfolioController } from './portfolio.controller';
import { Project, ProjectSchema } from './portfolio.schema';
import { User, UserSchema } from 'src/User/user.schema';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MulterModule.register({
      dest: './uploads', // Le répertoire où les fichiers seront stockés temporairement
    }),
  ],
  providers: [PortfolioService],
  controllers: [PortfolioController],
})
export class PortfolioModule {}
