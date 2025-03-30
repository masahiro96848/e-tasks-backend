import { Injectable } from '@nestjs/common';
import { TaskItemRepository } from '../repositories/task-item.repository';
import { TaskItem } from '@prisma/client';

@Injectable()
export class DeleteTaskItemService {
  constructor(private readonly taskItemRepository: TaskItemRepository) {}

  async handle({ id }: { id: string }): Promise<TaskItem> {
    return this.taskItemRepository.delete({ id });
  }
}
