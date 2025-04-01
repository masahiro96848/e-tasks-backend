import { Injectable } from '@nestjs/common';
import { TaskFolderRepository } from '../repositories/task-folder.repository';
import { Prisma, TaskFolder } from '@prisma/client';

@Injectable()
export class CreateTaskFolderService {
  constructor(private readonly taskFolderRepository: TaskFolderRepository) {}

  handle({
    input,
  }: {
    input: Prisma.TaskFolderUncheckedCreateInput;
  }): Promise<TaskFolder> {
    return this.taskFolderRepository.create({ input });
  }
}
