import { Module } from '@nestjs/common';
import { TaskResolver } from './resolvers/task.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TaskRepository } from './repositories/task.repository';
import { FindManyTasksService } from './services/find-many-tasks.service';
import { CreateTaskService } from './services/create-task.service';
import { UpdateTaskService } from './services/update-task.service';
import { UpdateCompletedUsecase } from './usecases/update-completed.usecase';
import { FindTaskService } from './services/find-task.service';
import { DeleteTaskService } from './services/delete-task.service';

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
