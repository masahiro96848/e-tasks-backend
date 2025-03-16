import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';
import { CreateTodoInput } from '../dto/create-todo.input';

@Injectable()
export class CreateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle({
    input,
  }: {
    input: Prisma.TodoUncheckedCreateInput;
  }): Promise<Todo> {
    return this.todoRepository.create({
      input,
    });
  }
}
