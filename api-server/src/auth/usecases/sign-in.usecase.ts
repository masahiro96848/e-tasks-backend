import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { FirebaseService } from 'src/util/firebase/firebase.service';
import { SignInService } from '../services/sign-in.service';

@Injectable()
export class SignInUsecase {
  constructor(
    private readonly signInService: SignInService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async handle({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    const firebaseUser = await this.firebaseService.findByEmail({ email });
    if (!firebaseUser) {
      throw new Error('存在しないユーザーです');
    }

    return this.signInService.handle({ email, password });
  }
}
