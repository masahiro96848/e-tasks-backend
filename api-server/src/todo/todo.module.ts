import { Module } from '@nestjs/common';
import { TodoResolver } from './resolvers/todo.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoRepository } from './repositories/todo.repository';
import { FindManyTodosUsecase } from './usecase/find-many-todos.usecase';
import { FindManyTodosService } from './services/find-many-todos.service';
import { CreateTodoService } from './services/create-todo.service';
import { DeleteTodoService } from './services/delete-todo.service';
import { UpdateTodoService } from './services/update-todo.service';
import { CreateTodoUsecase } from './usecase/create-todo.usecase';

@Module({
  imports: [PrismaModule],
  providers: [
    TodoRepository,
    TodoResolver,
    FindManyTodosUsecase,
    FindManyTodosService,
    CreateTodoUsecase,
    CreateTodoService,
    UpdateTodoService,
    DeleteTodoService,
  ],
  exports: [TodoRepository, FindManyTodosUsecase, CreateTodoUsecase],
})
export class TodoModule {}
