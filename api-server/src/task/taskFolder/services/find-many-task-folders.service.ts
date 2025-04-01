import { Injectable } from '@nestjs/common';
import { TaskFolderRepository } from '../repositories/task-folder.repository';
import { Prisma, TaskFolder } from '@prisma/client';

@Injectable()
export class FindManyTaskFoldersService {
  constructor(private readonly taskFolderRepository: TaskFolderRepository) {}

  async handle({
    where,
  }: {
    where: Prisma.TaskFolderWhereInput;
  }): Promise<TaskFolder[]> {
    return await this.taskFolderRepository.findMany({ where });
  }
}
