import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindManyTodosService } from '../services/find-many-todos.service';
import { CreateTodoService } from '../services/create-todo.service';
import { TodoModel } from '../models/todo.model';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { UserEntity } from 'src/decorator/user.decorator';
import { User } from '@prisma/client';
import { CreateTodoInput } from '../dto/create-todo.input';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly findManyTodosService: FindManyTodosService,
    private readonly createTodoService: CreateTodoService,
  ) {}

  @Query(() => [TodoModel])
  @UseGuards(FirebaseAuthGuard)
  async todos(@UserEntity('user') user: User) {
    return await this.findManyTodosService.handle({
      userId: user.id,
    });
  }

  @Mutation(() => TodoModel)
  @UseGuards(FirebaseAuthGuard)
  async createTodo(
    @UserEntity('user') user: User,
    @Args('input') input: CreateTodoInput,
  ): Promise<TodoModel> {
    return await this.createTodoService.handle({
      userId: user.id,
      title: input.title,
      description: input.description,
    });
  }
}
