import { Injectable } from '@nestjs/common';
import { CreateUserService } from '../services/create-user.service';
import { Prisma, User } from '@prisma/client';
import { FirebaseService } from 'src/util/firebase/firebase.service';

@Injectable()
export class CreateUserUsecase {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async handle({
    name,
    firebaseUId,
    email,
    password,
  }: {
    name: string;
    firebaseUId: string;
    email: string;
    password: string;
  }): Promise<User> {
    const firebaseUser = await this.firebaseService.findByUid({
      uid: firebaseUId,
    });
    if (!firebaseUser) {
      throw new Error('存在しないユーザーです');
    }

    return this.createUserService.handle({
      name,
      firebaseUId: firebaseUId,
      email: email,
      password: password,
    });
  }
}
