import { Injectable } from '@nestjs/common';
import { DeleteUserService } from '../services/delete-user.service';
import { User } from '@prisma/client';
import { FirebaseService } from 'src/util/firebase/firebase.service';
import { FindUserService } from '../services/find-user.service';

@Injectable()
export class DeleteUserUsecase {
  constructor(
    private readonly findUserService: FindUserService,
    private readonly deleteUserService: DeleteUserService,
    private readonly firebaseService: FirebaseService,
  ) {}

  async handle({ id }: { id: string }): Promise<User> {
    const user = await this.firebaseService.findByUid({ uid: id });

    // firebaseからユーザーを削除
    await this.firebaseService.delete({ uid: id });

    // dbからユーザーを削除
    return this.deleteUserService.handle({ id });
  }
}
