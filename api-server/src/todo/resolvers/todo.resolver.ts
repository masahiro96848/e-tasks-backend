import { Resolver, Query } from '@nestjs/graphql';
import { Todo } from '../models/todo.model';
import { FindManyTodosUsecase } from '../usecase/find-many-todos.usecase';

@Resolver()
export class TodoResolver {
  constructor(private readonly findManyTodosUsecase: FindManyTodosUsecase) {}

  @Query(() => [Todo], { description: 'Todo一覧取得' })
  todos(): Promise<Todo[]> {
    return this.findManyTodosUsecase.handle({});
  }
}
