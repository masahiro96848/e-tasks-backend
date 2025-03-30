import { Injectable } from '@nestjs/common';
import { TaskItemRepository } from '../repositories/task-item.repository';
import { Prisma, TaskItem } from '@prisma/client';

@Injectable()
export class FindManyTaskItemsService {
  constructor(private readonly taskItemRepository: TaskItemRepository) {}

  async handle({ userId }: { userId: string }): Promise<TaskItem[]> {
    return await this.taskItemRepository.findMany({
      where: {
        userId,
      },
    });
  }
}
