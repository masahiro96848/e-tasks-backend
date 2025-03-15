import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthRepository } from '../repositories/auth.repositories';
import * as bcrypt from 'bcrypt';
import { CreateSignUpInput } from '../dto/create-sign-up.input';

@Injectable()
export class SignUpService {
  constructor(private readonly authRepository: AuthRepository) {}

  async handle({ input }: { input: CreateSignUpInput }): Promise<User> {
    const hashedPassword = await bcrypt.hash(input.password, 10);

    return this.authRepository.create({
      input: {
        ...input,
        password: hashedPassword,
      },
    });
  }
}
