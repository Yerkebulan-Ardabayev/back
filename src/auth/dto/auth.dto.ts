import { IsEmail, IsString, MinLength } from "class-validator"

export class AuthDto{
  @IsEmail()
  email: string
  
  @MinLength(6, {
    message:'Password cannot be less than 5 characters!',
  })
  
  @IsString()
  password: string
}