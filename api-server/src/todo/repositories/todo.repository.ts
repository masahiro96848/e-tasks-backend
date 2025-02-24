import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany({ input }: { input: Prisma.TodoWhereInput }): PrismaPromise<Todo[]> {
    return this.prisma.todo.findMany({
      where: {
        ...input,
      },
    });
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
}
