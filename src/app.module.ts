import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { CommentModule } from './comment/comment.module';  // Importation du module Comment
import { UserModule } from './User/user.module';
import { AuthModule } from './auth/AuthModule';
import { BlogModule } from './blog/blog.module';
import { PortfolioModule } from './Portfolio/portfolio.module';
import { JwtModule } from '@nestjs/jwt';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/bauhaus'),
    UserModule,
    CommentModule,
    AuthModule,
    BlogModule,  
    PortfolioModule,
    ContactModule,
    JwtModule.register({
      secret: 'your-secret-key', // Change this to a more secure key
      signOptions: { expiresIn: '60m' }, // Token expiration time
    }),  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
