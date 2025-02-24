import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Prisma, PrismaPromise, User } from '@prisma/client';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  handle({
    input,
    trx,
  }: {
    input: Prisma.UserUncheckedCreateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<User> {
    return this.userRepository.create({ input, trx });
  }
}
