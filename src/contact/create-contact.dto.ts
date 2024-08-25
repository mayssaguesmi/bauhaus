import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  message: string;
}
