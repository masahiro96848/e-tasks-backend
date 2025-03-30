import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, TaskItem } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskItemRepository {
  constructor(private readonly prisma: PrismaService) {}
  findWithInclude({
    where,
  }: {
    where: Prisma.TaskItemWhereInput;
  }): PrismaPromise<TaskItem> {
    return this.prisma.taskItem.findUnique({
      where: {
        id: where.id as string,
      },
      include: {
        user: true,
      },
    });
  }

  findMany({
    where,
  }: {
    where: Prisma.TaskItemWhereInput;
  }): PrismaPromise<TaskItem[]> {
    return this.prisma.taskItem.findMany({ where, include: { user: true } });
  }

  create({
    input,
  }: {
    input: Prisma.TaskItemUncheckedCreateInput;
  }): PrismaPromise<TaskItem> {
    return this.prisma.taskItem.create({
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
    input: Prisma.TaskItemUncheckedUpdateInput;
  }): PrismaPromise<TaskItem> {
    return this.prisma.taskItem.update({
      where: {
        id: id as string,
      },
      data: input,
    });
  }

  delete({ id }: { id: string }): PrismaPromise<TaskItem> {
    return this.prisma.taskItem.delete({
      where: {
        id: id as string,
      },
    });
  }
}
