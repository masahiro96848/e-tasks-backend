import { Injectable } from '@nestjs/common';
import { TaskItemRepository } from '../repositories/task-item.repository';
import { Prisma, TaskItem } from '@prisma/client';

@Injectable()
export class FindTaskItemService {
  constructor(private readonly taskItemRepository: TaskItemRepository) {}

  async handle({
    where,
  }: {
    where: Prisma.TaskItemWhereInput;
  }): Promise<TaskItem> {
    return this.taskItemRepository.findWithInclude({ where });
  }
}
