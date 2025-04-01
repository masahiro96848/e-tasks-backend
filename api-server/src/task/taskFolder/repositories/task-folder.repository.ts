import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskFolderInput } from '../dto/create-task-folder.input';
import { TaskFolderModel } from '../models/task-folder.model';
import { Prisma, PrismaPromise, TaskFolder } from '@prisma/client';

@Injectable()
export class TaskFolderRepository {
  constructor(private readonly prisma: PrismaService) {}

  find({
    where,
  }: {
    where: Prisma.TaskFolderWhereInput;
  }): PrismaPromise<TaskFolder> {
    return this.prisma.taskFolder.findUnique({
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
    where: Prisma.TaskFolderWhereInput;
  }): PrismaPromise<TaskFolder[]> {
    return this.prisma.taskFolder.findMany({
      where,
      include: {
        user: true,
      },
    });
  }

  create({
    input,
  }: {
    input: Prisma.TaskFolderUncheckedCreateInput;
  }): PrismaPromise<TaskFolder> {
    return this.prisma.taskFolder.create({
      data: {
        ...input,
      },
    });
  }
}
