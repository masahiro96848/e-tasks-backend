import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class UpdateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({ id, name }: { id: number; name: string }): Promise<User> {
    return this.userRepository.update({
      id,
      input: {
        name,
      },
    });
  }
}
