import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class FindTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle({ where }: { where: Prisma.TaskWhereInput }): Promise<Task> {
    return this.taskRepository.findWithInclude({ where });
  }
}
