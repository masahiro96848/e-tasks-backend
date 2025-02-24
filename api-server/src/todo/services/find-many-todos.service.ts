import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindManyTodosService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle<T extends Prisma.TodoInclude>({
    where,
    include,
    orderBy,
    trx,
  }: {
    where?: Prisma.TodoWhereInput;
    include?: T;
    orderBy?: Prisma.TodoOrderByWithRelationInput;
    trx?: Prisma.TransactionClient;
  }): Promise<Prisma.TodoGetPayload<{ include: T }>[]> {
    return this.todoRepository.findWithInclude({
      where,
      include,
      orderBy,
      trx,
    });
  }
}
