import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTodoInput } from '../dto/create-todo-input';
import { FindManyTodosService } from '../services/find-many-todos.service';
import { CreateTodoService } from '../services/create-todo.service';
import { TodoModel } from '../models/todo.model';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly findManyTodosService: FindManyTodosService,
    private readonly createTodoService: CreateTodoService,
  ) {}

  @Query(() => [TodoModel])
  @UseGuards(FirebaseAuthGuard)
  async todos() {
    return await this.findManyTodosService.handle({
      userId: 1,
    });
  }

  @Mutation(() => TodoModel)
  @UseGuards(FirebaseAuthGuard)
  async createTodo(
    @Args('title') title: string,
    @Args('description', { nullable: true }) description: string,
  ) {
    return await this.createTodoService.handle({
      userId: 1,
      title,
      description,
    });
  }
}
