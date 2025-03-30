import { Injectable } from '@nestjs/common';
import { TaskItemRepository } from '../repositories/task-item.repository';
import { Prisma, TaskItem } from '@prisma/client';

@Injectable()
export class CreateTaskItemService {
  constructor(private readonly taskItemRepository: TaskItemRepository) {}

  async handle({
    input,
  }: {
    input: Prisma.TaskItemUncheckedCreateInput;
  }): Promise<TaskItem> {
    return this.taskItemRepository.create({
      input,
    });
  }
}
