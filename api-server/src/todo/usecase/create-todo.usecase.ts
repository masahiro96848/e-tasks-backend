import { Injectable } from '@nestjs/common';
import { CreateTodoService } from '../services/create-todo.service';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';

@Injectable()
export class CreateTodoUsecase {
  constructor(private readonly createTodoService: CreateTodoService) {}

  handle({
    input,
    trx,
  }: {
    input: Prisma.TodoUncheckedCreateInput;
    trx?: Prisma.TransactionClient;
  }): PrismaPromise<Todo> {
    return this.createTodoService.handle({
      input,
      trx,
    });
  }
}
