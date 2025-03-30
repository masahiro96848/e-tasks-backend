import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Task } from '@prisma/client';

@Injectable()
export class DeleteTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle({ id }: { id: string }): Promise<Task> {
    return this.taskRepository.delete({ id });
  }
}
