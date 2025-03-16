import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class FindTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle({ where }: { where: Prisma.TodoWhereInput }): Promise<Todo> {
    return this.todoRepository.findWithInclude({ where });
  }
}
