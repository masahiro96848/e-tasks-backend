import { Injectable } from '@nestjs/common';
import { TodoRepository } from '../repositories/todo.repository';
import { Prisma, PrismaPromise, Todo } from '@prisma/client';

@Injectable()
export class CreateTodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async handle({
    userId,
    title,
    description,
  }: {
    userId: number;
    title: string;
    description: string;
  }): Promise<Todo> {
    return this.todoRepository.create({
      input: {
        userId,
        title,
        description,
      },
    });
  }
}
