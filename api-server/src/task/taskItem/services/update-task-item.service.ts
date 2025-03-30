import { Injectable } from '@nestjs/common';
import { TaskItemRepository } from '../repositories/task-item.repository';
import { Prisma, TaskItem } from '@prisma/client';

@Injectable()
export class UpdateTaskItemService {
  constructor(private readonly taskItemRepository: TaskItemRepository) {}

  async handle({
    id,
    input,
  }: {
    id: string;
    input: Prisma.TaskItemUncheckedUpdateInput;
  }): Promise<TaskItem> {
    return this.taskItemRepository.update({
      id,
      input,
    });
  }
}
