import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class DeleteUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({ id }: { id: string }): Promise<User> {
    return this.userRepository.delete({
      id,
    });
  }
}
