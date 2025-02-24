import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';

@Injectable()
export class DeleteTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  handle({
    id,
    trx,
  }: {
    id: string;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return this.todoRepository.delete({
      id,
      trx,
    });
  }
}
