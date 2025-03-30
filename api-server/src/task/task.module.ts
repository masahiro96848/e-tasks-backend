import { Module } from '@nestjs/common';
import { TaskResolver } from './taskList/resolvers/task.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskRepository } from './taskList/repositories/task.repository';
import { FindManyTasksService } from './taskList/services/find-many-tasks.service';
import { CreateTaskService } from './taskList/services/create-task.service';
import { UpdateTaskService } from './taskList/services/update-task.service';
import { UpdateCompletedUsecase } from './taskList/usecases/update-completed.usecase';
import { FindTaskService } from './taskList/services/find-task.service';
import { DeleteTaskService } from './taskList/services/delete-task.service';

@Module({
  imports: [PrismaModule],
  providers: [
    TaskRepository,
    TaskResolver,
    FindTaskService,
    FindManyTasksService,
    CreateTaskService,
    UpdateTaskService,
    DeleteTaskService,
    UpdateCompletedUsecase,
  ],
  exports: [TaskRepository],
})
export class TaskModule {}
