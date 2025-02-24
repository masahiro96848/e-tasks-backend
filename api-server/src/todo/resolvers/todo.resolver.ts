import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
// import { Todo } from '../models/todo.model';
import { FindManyTodosUsecase } from '../usecase/find-many-todos.usecase';
import { Prisma, PrismaPromise } from '@prisma/client';
import { CreateTodoUsecase } from '../usecase/create-todo.usecase';
import { TodoModel } from '../models/todo.model';
import { CreateTodoInput } from '../dto/create-todo-input';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly findManyTodosUsecase: FindManyTodosUsecase,
    private readonly createTodoUsecase: CreateTodoUsecase,
  ) {}

  @Query(() => [TodoModel], { description: 'Todo一覧取得' })
  todos(): Promise<TodoModel[]> {
    return this.findManyTodosUsecase.handle({});
  }

  @Mutation(() => TodoModel, { description: 'Todo作成' })
  createTodo(
    @Args('input', { type: () => CreateTodoInput })
    input: Prisma.TodoUncheckedCreateInput,
  ): Promise<TodoModel> {
    return this.createTodoUsecase.handle({ input });
  }
}
