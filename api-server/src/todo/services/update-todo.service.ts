import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, Todo } from '@prisma/client';

@Injectable()
export class UpdateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle({
    id,
    input,
  }: {
    id: string;
    input: Prisma.TodoUncheckedUpdateInput;
  }): Promise<Todo> {
    return this.todoRepository.update({
      id,
      input,
    });
  }
}
