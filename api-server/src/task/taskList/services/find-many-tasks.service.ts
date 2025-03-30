import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class FindManyTasksService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle({ userId }: { userId: string }): Promise<Task[]> {
    return await this.taskRepository.findMany({
      where: {
        userId,
      },
    });
  }
}
