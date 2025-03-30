import { Injectable } from '@nestjs/common';
import { TaskRepository } from '../repositories/task.repository';
import { Prisma, Task } from '@prisma/client';

@Injectable()
export class CreateTaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle({
    input,
  }: {
    input: Prisma.TaskUncheckedCreateInput;
  }): Promise<Task> {
    return this.taskRepository.create({
      input,
    });
  }
}
