import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { TaskItemModel } from '../models/task-item.model';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/lib/firebase/firebase-auth.guard';

import { User } from '@prisma/client';
import { CreateTaskInput } from '../dto/create-task.input';
import { UserEntity } from 'src/lib/firebase/decorator/user.decorator';

import { UpdateTaskInput } from '../dto/update-task.input';
import { UpdateCompletedUsecase } from '../usecases/update-completed.usecase';
import { DeleteTaskItemService } from '../services/delete-task-item.service';
import { FindManyTaskItemsService } from '../services/find-many-task-items.service';
import { FindTaskItemService } from '../services/find-task-item.service';
import { UpdateTaskItemService } from '../services/update-task-item.service';
import { CreateTaskItemService } from '../services/create-task-item.service';

@Resolver()
export class TaskItemResolver {
  constructor(
    private readonly findTaskItemService: FindTaskItemService,
    private readonly findManyTaskItemsService: FindManyTaskItemsService,
    private readonly createTaskItemService: CreateTaskItemService,
    private readonly updateTaskItemService: UpdateTaskItemService,
    private readonly deleteTaskItemService: DeleteTaskItemService,
    private readonly updateCompletedUsecase: UpdateCompletedUsecase,
  ) {}

  @Query(() => TaskItemModel)
  @UseGuards(FirebaseAuthGuard)
  async taskItem(@UserEntity('user') user: User, @Args('id') id: string) {
    return await this.findTaskItemService.handle({
      where: { id, userId: user.id },
    });
  }

  @Query(() => [TaskItemModel])
  @UseGuards(FirebaseAuthGuard)
  async taskItems(@UserEntity('user') user: User) {
    return await this.findManyTaskItemsService.handle({
      userId: user.id,
    });
  }

  // @Mutation(() => TaskModel)
  // @UseGuards(FirebaseAuthGuard)
  // async createTask(
  //   @UserEntity('user') user: User,
  //   @Args('input') input: CreateTaskInput,
  // ): Promise<TaskModel> {
  //   return await this.createTaskService.handle({
  //     input: {
  //       ...input,
  //       userId: user.id,
  //     },
  //   });
  // }

  // @Mutation(() => TaskModel)
  // @UseGuards(FirebaseAuthGuard)
  // async updateTask(
  //   @UserEntity('user') user: User,
  //   @Args('id') id: string,
  //   @Args('input') input: UpdateTaskInput,
  // ): Promise<TaskModel> {
  //   return await this.updateTaskService.handle({
  //     id,
  //     input: {
  //       ...input,
  //       userId: user.id,
  //     },
  //   });
  // }

  // @Mutation(() => TaskModel)
  // @UseGuards(FirebaseAuthGuard)
  // async updateCompleted(
  //   @UserEntity('user') user: User,
  //   @Args('id') id: string,
  //   @Args('completed') completed: boolean,
  // ): Promise<TaskModel> {
  //   return await this.updateCompletedUsecase.handle({ id, completed });
  // }

  // @Mutation(() => TaskModel)
  // @UseGuards(FirebaseAuthGuard)
  // async deleteTask(
  //   @UserEntity('user') user: User,
  //   @Args('id') id: string,
  // ): Promise<TaskModel> {
  //   return await this.deleteTaskService.handle({
  //     id,
  //   });
  // }
}
