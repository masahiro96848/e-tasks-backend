import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findWithInclude<T extends Prisma.UserInclude>({
    where,
    include,
    orderBy,
    trx,
  }: {
    where?: Prisma.UserWhereInput;
    include?: T;
    orderBy?: Prisma.UserOrderByWithRelationInput;
    trx?: Prisma.TransactionClient;
  }): Promise<Prisma.UserGetPayload<{ include: T }> | null> {
    return (trx ?? this.prismaService).user.findFirst({
      where,
      include,
      orderBy,
    });
  }

  create({
    input,
    trx,
  }: {
    input: Prisma.UserUncheckedCreateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<User> {
    return (trx ?? this.prismaService).user.create({
      data: input,
    });
  }

  update({
    id,
    input,
    trx,
  }: {
    id: number;
    input: Prisma.UserUncheckedUpdateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<User> {
    return (trx ?? this.prismaService).user.update({
      where: { id: Number(id) },
      data: input,
    });
  }

  delete({
    id,
    trx,
  }: {
    id: number;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<User> {
    return (trx ?? this.prismaService).user.delete({
      where: { id: Number(id) },
    });
  }
}
