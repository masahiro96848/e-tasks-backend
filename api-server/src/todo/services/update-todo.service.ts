import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';

@Injectable()
export class UpdateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  handle({
    id,
    input,
    trx,
  }: {
    id: string;
    input: Prisma.TodoUncheckedUpdateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return this.todoRepository.update({
      id,
      input,
      trx,
    });
  }
}
