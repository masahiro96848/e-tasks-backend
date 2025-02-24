import { Resolver, Query } from '@nestjs/graphql';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query(() => [Todo])
  getTodos() {
    return this.todoService.findAll();
  }
}
