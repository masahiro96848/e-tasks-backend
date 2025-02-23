import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    const todos = await this.prismaService.todo.findMany();
    return todos;
  }
}
