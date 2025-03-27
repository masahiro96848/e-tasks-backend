import { Injectable } from '@nestjs/common';
import { UpdateTodoService } from '../services/update-todo.service';

@Injectable()
export class UpdateCompletedUsecase {
  constructor(private readonly updateTodoService: UpdateTodoService) {}

  async handle({ id, completed }: { id: string; completed: boolean }) {
    return this.updateTodoService.handle({ id, input: { completed } });
  }
}
