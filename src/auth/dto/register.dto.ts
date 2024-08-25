import { IsString, IsEmail, IsIn } from 'class-validator';

export class RegisterDto {
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsIn(['admin', 'user'])
  readonly role: 'admin' | 'user';  // Utilise 'admin' ou 'user' comme valeur possible
}
