import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { TaskModel } from '../models/task.model';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/lib/firebase/firebase-auth.guard';

import { User } from '@prisma/client';
import { CreateTaskInput } from '../dto/create-task.input';
import { UserEntity } from 'src/lib/firebase/decorator/user.decorator';

import { UpdateTaskInput } from '../dto/update-task.input';
import { UpdateCompletedUsecase } from '../usecases/update-completed.usecase';
import { DeleteTaskService } from '../services/delete-task.service';
import { FindManyTasksService } from '../services/find-many-tasks.service';
import { FindTaskService } from '../services/find-task.service';
import { UpdateTaskService } from '../services/update-task.service';
import { CreateTaskService } from '../services/create-task.service';

@Resolver()
export class TaskResolver {
  constructor(
    private readonly findTaskService: FindTaskService,
    private readonly findManyTasksService: FindManyTasksService,
    private readonly createTaskService: CreateTaskService,
    private readonly updateTaskService: UpdateTaskService,
    private readonly deleteTaskService: DeleteTaskService,
    private readonly updateCompletedUsecase: UpdateCompletedUsecase,
  ) {}

  @Query(() => TaskModel)
  @UseGuards(FirebaseAuthGuard)
  async task(@UserEntity('user') user: User, @Args('id') id: string) {
    return await this.findTaskService.handle({
      where: { id, userId: user.id },
    });
  }

  @Query(() => [TaskModel])
  @UseGuards(FirebaseAuthGuard)
  async tasks(@UserEntity('user') user: User) {
    return await this.findManyTasksService.handle({
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
