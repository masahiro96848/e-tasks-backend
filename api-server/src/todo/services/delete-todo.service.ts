import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Todo } from '@prisma/client';

@Injectable()
export class DeleteTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle({ id }: { id: string }): Promise<Todo> {
    return this.todoRepository.delete({ id });
  }
}
