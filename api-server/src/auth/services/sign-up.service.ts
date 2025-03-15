import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthRepository } from '../repositories/auth.repositories';

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async signUp({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    return this.authRepository.create({
      input: {
        name,
        email,
        password,
      },
    });
  }
}
