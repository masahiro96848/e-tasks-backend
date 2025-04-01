import { Injectable } from '@nestjs/common';
import { TaskFolderRepository } from '../repositories/task-folder.repository';
import { Prisma, TaskFolder } from '@prisma/client';
import { TaskFolderModel } from '../models/task-folder.model';

@Injectable()
export class FindTaskFolderService {
  constructor(private readonly taskFolderRepository: TaskFolderRepository) {}

  async handle({
    where,
  }: {
    where: Prisma.TaskFolderWhereInput;
  }): Promise<TaskFolder> {
    return await this.taskFolderRepository.find({ where });
  }
}
