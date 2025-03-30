import { Injectable } from '@nestjs/common';
import { UpdateTaskService } from '../services/update-task.service';

@Injectable()
export class UpdateCompletedUsecase {
  constructor(private readonly updateTaskService: UpdateTaskService) {}

  async handle({ id, completed }: { id: string; completed: boolean }) {
    return this.updateTaskService.handle({
      id,
      input: { completedAt: completed ? new Date() : null },
    });
  }
}
