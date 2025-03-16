import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { FindManyTodosService } from '../services/find-many-todos.service';
import { CreateTodoService } from '../services/create-todo.service';
import { TodoModel } from '../models/todo.model';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/lib/firebase/firebase-auth.guard';

import { User } from '@prisma/client';
import { CreateTodoInput } from '../dto/create-todo.input';
import { UserEntity } from 'src/lib/firebase/decorator/user.decorator';
import { UpdateTodoService } from '../services/update-todo.service';
import { UpdateTodoInput } from '../dto/update-todo.input';
import { FindTodoService } from '../services/find-todo.service';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly findTodoService: FindTodoService,
    private readonly findManyTodosService: FindManyTodosService,
    private readonly createTodoService: CreateTodoService,
    private readonly updateTodoService: UpdateTodoService,
  ) {}

  @Query(() => TodoModel)
  @UseGuards(FirebaseAuthGuard)
  async todo(@UserEntity('user') user: User, @Args('id') id: string) {
    return await this.findTodoService.handle({
      where: { id, userId: user.id },
    });
  }

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
      input: {
        ...input,
        userId: user.id,
      },
    });
  }

  @Mutation(() => TodoModel)
  @UseGuards(FirebaseAuthGuard)
  async updateTodo(
    @UserEntity('user') user: User,
    @Args('id') id: string,
    @Args('input') input: UpdateTodoInput,
  ): Promise<TodoModel> {
    return await this.updateTodoService.handle({
      id,
      input: {
        ...input,
        userId: user.id,
      },
    });
  }
}
