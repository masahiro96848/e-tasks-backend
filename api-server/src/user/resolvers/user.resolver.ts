import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { CreateUserUsecase } from '../usecase/create-user.usecase';
import { FindUserService } from '../services/find-user.service';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { UpdateUserService } from '../services/update-user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly findUserService: FindUserService,
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly updateUserService: UpdateUserService,
  ) {}

  @Query(() => UserModel)
  @UseGuards(FirebaseAuthGuard)
  async user(@Args('id') id: string) {
    return this.findUserService.handle({ id: parseInt(id) });
  }

  @Mutation(() => UserModel)
  async createUser(
    @Args('name') name: string,
    @Args('uid') uid: string,
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    return this.createUserUsecase.handle({
      name,
      uid,
      email,
      password,
    });
  }

  @Mutation(() => UserModel)
  @UseGuards(FirebaseAuthGuard)
  async updateUser(@Args('id') id: number, @Args('name') name: string) {
    return this.updateUserService.handle({
      id,
      name,
    });
  }
}
