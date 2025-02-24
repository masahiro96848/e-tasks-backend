import { Injectable } from '@nestjs/common';
import { CreateUserService } from '../services/create-user.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class CreateUserUsecase {
  constructor(private readonly createUserService: CreateUserService) {}

  async handle({ name, uid }: { name: string; uid: string }): Promise<User> {
    return this.createUserService.handle({
      name,
      firebaseUId: uid,
    });
  }
}
