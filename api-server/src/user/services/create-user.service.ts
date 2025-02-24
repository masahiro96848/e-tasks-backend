import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  handle({
    firebaseUId,
    name,
    email,
    password,
  }: {
    firebaseUId: string;
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    return this.userRepository.create({
      input: {
        firebaseUId,
        name,
        email,
        password,
      },
    });
  }
}
