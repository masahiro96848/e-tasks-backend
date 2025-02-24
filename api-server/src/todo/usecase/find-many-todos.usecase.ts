import { Injectable } from '@nestjs/common';
import { FindManyTodosService } from '../services/find-many-todos.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class FindManyTodosUsecase {
  constructor(private readonly findManyTodosService: FindManyTodosService) {}

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
    return this.findManyTodosService.handle({ where, include, orderBy, trx });
  }
}
