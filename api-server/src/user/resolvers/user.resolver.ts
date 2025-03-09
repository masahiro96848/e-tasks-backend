import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { CreateUserUsecase } from '../usecase/create-user.usecase';
import { FindUserService } from '../services/find-user.service';
import { UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/auth/firebase-auth.guard';
import { UpdateUserService } from '../services/update-user.service';
import { DeleteUserUsecase } from '../usecase/delete-user.usecase';
import { CreateUserInput } from '../dto/create-user.input';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly findUserService: FindUserService,
    private readonly createUserUsecase: CreateUserUsecase,
    private readonly updateUserService: UpdateUserService,
    private readonly deleteUserUsecase: DeleteUserUsecase,
  ) {}

  @Query(() => UserModel)
  @UseGuards(FirebaseAuthGuard)
  async user(@Args('id') id: string) {
    return this.findUserService.handle({ id });
  }

  @Mutation(() => UserModel)
  async createUser(@Args('input') input: CreateUserInput): Promise<UserModel> {
    return this.createUserUsecase.handle({
      name: input.name,
      firebaseUId: input.firebaseUId,
      email: input.email,
      password: input.password,
    });
  }

  @Mutation(() => UserModel)
  @UseGuards(FirebaseAuthGuard)
  async updateUser(
    @Args('id') id: string,
    @Args('name') name: string,
  ): Promise<UserModel> {
    return this.updateUserService.handle({
      id,
      name,
    });
  }

  @Mutation(() => UserModel)
  @UseGuards(FirebaseAuthGuard)
  async deleteUser(@Args('id') id: string): Promise<UserModel> {
    return this.deleteUserUsecase.handle({ id });
  }
}
