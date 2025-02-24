import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findManyWithInclude<T extends Prisma.TodoInclude>({
    where,
    include,
    skip,
    take,
    orderBy,
    trx,
  }: {
    where?: Prisma.TodoWhereInput;
    include?: T;
    skip?: number;
    take?: number;
    orderBy?: Prisma.TodoOrderByWithRelationInput;
    trx?: Prisma.TransactionClient;
  }): Promise<Prisma.TodoGetPayload<{ include: T }>[]> {
    return (trx ?? this.prismaService).todo.findMany({
      where,
      include,
      skip,
      take,
      orderBy,
    });
  }

  create({
    input,
    trx,
  }: {
    input: Prisma.TodoUncheckedCreateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return (trx ?? this.prismaService).todo.create({
      data: {
        ...input,
      },
    });
  }

  update({
    id,
    input,
    trx,
  }: {
    id: string;
    input: Prisma.TodoUncheckedUpdateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return (trx ?? this.prismaService).todo.update({
      where: { id: Number(id) },
      data: {
        ...input,
      },
    });
  }

  delete({
    id,
    trx,
  }: {
    id: string;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return (trx ?? this.prismaService).todo.delete({
      where: { id: Number(id) },
    });
  }

  deleteMany({
    where,
    trx,
  }: {
    where?: Prisma.TodoWhereInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Prisma.BatchPayload> {
    return (trx ?? this.prismaService).todo.deleteMany({
      where,
    });
  }
}
