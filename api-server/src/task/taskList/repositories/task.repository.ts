import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}
  findWithInclude({
    where,
  }: {
    where: Prisma.TaskWhereInput;
  }): PrismaPromise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id: where.id as string,
      },
      include: {
        user: true,
      },
    });
  }

  findMany({ where }: { where: Prisma.TaskWhereInput }): PrismaPromise<Task[]> {
    return this.prisma.task.findMany({ where, include: { user: true } });
  }

  create({
    input,
  }: {
    input: Prisma.TaskUncheckedCreateInput;
  }): PrismaPromise<Task> {
    return this.prisma.task.create({
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
    input: Prisma.TaskUncheckedUpdateInput;
  }): PrismaPromise<Task> {
    return this.prisma.task.update({
      where: {
        id: id as string,
      },
      data: input,
    });
  }

  delete({ id }: { id: string }): PrismaPromise<Task> {
    return this.prisma.task.delete({
      where: {
        id: id as string,
      },
    });
  }
}
