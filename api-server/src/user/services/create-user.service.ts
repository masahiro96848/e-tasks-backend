import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Prisma, PrismaPromise, User } from '@prisma/client';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  handle({
    firebaseUId,
    name,
  }: {
    firebaseUId: string;
    name: string;
  }): Promise<User> {
    return this.userRepository.create({
      input: {
        firebaseUId,
        name,
        email: '',
        password: '',
      },
    });
  }
}
