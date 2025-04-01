import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { FindTaskFolderService } from '../services/find-task-folder.service';
import { UseGuards } from '@nestjs/common';
import { TaskFolderModel } from '../models/task-folder.model';
import { User } from '@prisma/client';
import { UserEntity } from 'src/lib/firebase/decorator/user.decorator';
import { FirebaseAuthGuard } from 'src/lib/firebase/firebase-auth.guard';
import { FindManyTaskFoldersService } from '../services/find-many-task-folders.service';
import { CreateTaskFolderService } from '../services/create-task-folder.service';
import { CreateTaskFolderInput } from '../dto/create-task-folder.input';

@Resolver()
export class TaskFolderResolver {
  constructor(
    private readonly findTaskFolderService: FindTaskFolderService,
    private readonly findManyTaskFoldersService: FindManyTaskFoldersService,
    private readonly createTaskFolderService: CreateTaskFolderService,
  ) {}

  @Query(() => TaskFolderModel)
  @UseGuards(FirebaseAuthGuard)
  async taskFolder(@UserEntity('user') user: User, @Args('id') id: string) {
    return await this.findTaskFolderService.handle({
      where: { id, userId: user.id },
    });
  }

  @Query(() => [TaskFolderModel])
  @UseGuards(FirebaseAuthGuard)
  async taskFolders(@UserEntity('user') user: User) {
    return await this.findManyTaskFoldersService.handle({
      where: { userId: user.id },
    });
  }

  @Mutation(() => TaskFolderModel)
  @UseGuards(FirebaseAuthGuard)
  async createTaskFolder(
    @UserEntity('user') user: User,
    @Args('input') input: CreateTaskFolderInput,
  ) {
    return await this.createTaskFolderService.handle({
      input: { ...input, userId: user.id },
    });
  }
}
