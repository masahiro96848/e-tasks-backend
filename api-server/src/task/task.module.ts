import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { TaskItemRepository } from './taskItem/repositories/task-item.repository';
import { TaskItemResolver } from './taskItem/resolvers/task-item.resolver';
import { CreateTaskItemService } from './taskItem/services/create-task-item.service';
import { DeleteTaskItemService } from './taskItem/services/delete-task-item.service';
import { FindManyTaskItemsService } from './taskItem/services/find-many-task-items.service';
import { FindTaskItemService } from './taskItem/services/find-task-item.service';
import { UpdateTaskItemService } from './taskItem/services/update-task-item.service';
import { UpdateCompletedUsecase } from './taskItem/usecases/update-completed.usecase';
import { TaskFolderRepository } from './taskFolder/repositories/task-folder.repository';
@Module({
  imports: [PrismaModule],
  providers: [
    PrismaService,
    TaskItemRepository,
    TaskItemResolver,
    FindTaskItemService,
    FindManyTaskItemsService,
    CreateTaskItemService,
    UpdateTaskItemService,
    DeleteTaskItemService,
    UpdateCompletedUsecase,
    TaskFolderRepository,
  ],
  exports: [TaskItemRepository, TaskFolderRepository],
})
export class TaskModule {}
