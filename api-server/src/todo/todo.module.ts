import { Module } from '@nestjs/common';
import { TodoService } from './services/todo.service';
import { TodoResolver } from './resolvers/todo.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TodoService, TodoResolver],
})
export class TodoModule {}
