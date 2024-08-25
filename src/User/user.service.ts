import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService implements OnModuleInit {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async createUser(userData: Partial<User>): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const newUser = new this.userModel({
      ...userData,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async createDefaultAdmin(): Promise<void> {
    const adminExists = await this.userModel.findOne({ isAdmin: true }).exec();
    if (!adminExists) {
      const defaultAdmin = {
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123', // Vous pouvez choisir un autre mot de passe ou le rendre configurable
        isAdmin: true,
        role: 'admin', // Utilisez 'admin' pour le rôle
      };
      await this.createUser(defaultAdmin);
      console.log('Admin user created');
    } else {
      console.log('Admin user already exists');
    }
  }

  async onModuleInit(): Promise<void> {
    await this.createDefaultAdmin();
  }

  // Autres méthodes comme trouver un utilisateur, etc.
}
