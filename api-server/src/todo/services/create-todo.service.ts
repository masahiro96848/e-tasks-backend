import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';

@Injectable()
export class CreateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  handle({
    input,
    trx,
  }: {
    input: Prisma.TodoUncheckedCreateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return this.todoRepository.create({
      input,
      trx,
    });
  }
}
