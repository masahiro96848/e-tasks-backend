import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { FirebaseService } from 'src/util/firebase/firebase.service';
import { SignUpService } from '../services/sign-up.service';
import { CreateSignUpInput } from '../dto/create-sign-up.input';

@Injectable()
export class SignUpUsecase {
  constructor(
    private readonly signUpService: SignUpService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async handle({ input }: { input: CreateSignUpInput }): Promise<User> {
    const firebaseUser = await this.firebaseService.findByUid({
      uid: input.firebaseUId,
    });
    if (!firebaseUser) {
      throw new Error('存在しないユーザーです');
    }

    return this.signUpService.handle({
      input,
    });
  }
}
