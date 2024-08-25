import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from 'src/User/user.schema';
import * as bcrypt from 'bcrypt';  // Importation de bcrypt

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  // Méthode pour valider l'utilisateur
  async validateUser(username: string): Promise<User | null> {
    return this.userModel.findOne({ username }).exec();
  }

  async login(username: string, password: string): Promise<string> {
    const user = await this.userModel.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
      const payload = { username: user.username, sub: user._id, role: user.role };
      return this.jwtService.sign(payload);
    }
    throw new Error('Invalid credentials');
  }

  async register(userDetails: any): Promise<User> {
    const hashedPassword = await bcrypt.hash(userDetails.password, 10);
    const user = new this.userModel({
      ...userDetails,
      password: hashedPassword,
    });
    return user.save();
  }
}
