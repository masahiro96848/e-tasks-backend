import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthRepository } from '../repositories/auth.repositories';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SignInService {
  constructor(private readonly authRepository: AuthRepository) {}

  async handle({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    const user = await this.authRepository.findByEmail({ email });
    if (!user) {
      throw new Error('ユーザーが見つかりません');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('パスワードが正しくありません');
    }

    return user;
  }
}
