import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class FindUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({ id }: { id: string }): Promise<User> {
    return this.userRepository.findUniqueOrThrow({
      input: {
        id,
      },
    });
  }
}
