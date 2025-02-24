import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class FindManyTodosService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle({ userId }: { userId: number }): Promise<Todo[]> {
    return await this.todoRepository.findMany({
      input: {
        userId,
      },
    });
  }
}
