import { Module } from '@nestjs/common';
import { TodoResolver } from './resolvers/todo.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TodoRepository } from './repositories/todo.repository';
import { FindManyTodosUsecase } from './usecase/find-many-todos.usecase';
import { FindManyTodosService } from './services/find-many-todos.service';

@Module({
  imports: [PrismaModule],
  providers: [
    TodoRepository,
    TodoResolver,
    FindManyTodosUsecase,
    FindManyTodosService,
  ],
  exports: [TodoRepository, FindManyTodosUsecase],
})
export class TodoModule {}
