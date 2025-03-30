import { Injectable } from '@nestjs/common';
import { UpdateTaskItemService } from '../services/update-task-item.service';

@Injectable()
export class UpdateCompletedUsecase {
  constructor(private readonly updateTaskItemService: UpdateTaskItemService) {}

  async handle({ id, completed }: { id: string; completed: boolean }) {
    return this.updateTaskItemService.handle({
      id,
      input: { completedAt: completed ? new Date() : null },
    });
  }
}
