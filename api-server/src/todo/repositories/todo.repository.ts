import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) {}
  findWithInclude({
    where,
  }: {
    where: Prisma.TodoWhereInput;
  }): PrismaPromise<Todo> {
    return this.prisma.todo.findUnique({
      where: {
        id: where.id as string,
      },
      include: {
        user: true,
      },
    });
  }

  findMany({ where }: { where: Prisma.TodoWhereInput }): PrismaPromise<Todo[]> {
    return this.prisma.todo.findMany({ where, include: { user: true } });
  }

  create({
    input,
  }: {
    input: Prisma.TodoUncheckedCreateInput;
  }): PrismaPromise<Todo> {
    return this.prisma.todo.create({
      data: {
        ...input,
      },
    });
  }

  update({
    id,
    input,
  }: {
    id: string;
    input: Prisma.TodoUncheckedUpdateInput;
  }): PrismaPromise<Todo> {
    return this.prisma.todo.update({
      where: {
        id: id as string,
      },
      data: input,
    });
  }
}
