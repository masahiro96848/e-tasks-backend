import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindUserService {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({
    where,
    include,
    orderBy,
  }: {
    where?: Prisma.UserWhereInput;
    include?: Prisma.UserInclude;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<Prisma.UserGetPayload<{ include: Prisma.UserInclude }> | null> {
    return this.userRepository.findWithInclude({
      where,
      include,
      orderBy,
    });
  }
}
