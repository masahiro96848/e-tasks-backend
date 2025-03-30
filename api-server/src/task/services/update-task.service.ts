import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class UpdateTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle({
    id,
    input,
  }: {
    id: string;
    input: Prisma.TaskUncheckedUpdateInput;
  }): Promise<Task> {
    return this.taskRepository.update({
      id,
      input,
    });
  }
}
