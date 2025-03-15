import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { FindUserService } from '../services/find-user.service';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/lib/firebase/firebase-auth.guard';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly findUserService: FindUserService) {}

  @Query(() => UserModel)
  @UseGuards(FirebaseAuthGuard)
  async user(@Args('id') id: string) {
    return this.findUserService.handle({ id });
  }
}
