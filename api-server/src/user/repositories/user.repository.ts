import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findUniqueOrThrow({
    input,
  }: {
    input: Prisma.UserWhereUniqueInput;
  }): PrismaPromise<User> {
    return this.prismaService.user.findUniqueOrThrow({
      where: {
        ...input,
      },
    });
  }

  create({
    input,
  }: {
    input: Prisma.UserUncheckedCreateInput;
  }): PrismaPromise<User> {
    return this.prismaService.user.create({
      data: {
        ...input,
      },
    });
  }
}
