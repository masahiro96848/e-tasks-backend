import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  create({
    input,
  }: {
    input: Prisma.UserUncheckedCreateInput;
  }): PrismaPromise<User> {
    return this.prisma.user.create({
      data: {
        ...input,
      },
    });
  }
}
