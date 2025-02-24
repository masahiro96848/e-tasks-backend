import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { User } from '@prisma/client';

@Injectable()
export class FindByUidService {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({ uid }: { uid: string }): Promise<User> {
    return this.userRepository.findUniqueOrThrow({
      input: {
        firebaseUId: uid,
      },
    });
  }
}
