import { Module } from '@nestjs/common';
import { TodoResolver } from './resolvers/todo.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoRepository } from './repositories/todo.repository';
import { FindManyTodosService } from './services/find-many-todos.service';
import { CreateTodoService } from './services/create-todo.service';
import { UpdateTodoService } from './services/update-todo.service';
import { FindTodoService } from './services/find-todo.service';
import { DeleteTodoService } from './services/delete-todo.service';
import { UpdateCompletedUsecase } from './usecases/update-completed.usecase';

@Module({
  imports: [PrismaModule],
  providers: [
    TodoRepository,
    TodoResolver,
    FindTodoService,
    FindManyTodosService,
    CreateTodoService,
    UpdateTodoService,
    DeleteTodoService,
    UpdateCompletedUsecase,
  ],
  exports: [TodoRepository],
})
export class TodoModule {}
