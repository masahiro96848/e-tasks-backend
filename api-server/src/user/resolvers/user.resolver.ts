import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';
import { CreateUserUsecase } from '../usecase/create-user.usecase';
import { FindUserService } from '../services/find-user.service';

@Resolver(() => UserModel)
export class UserResolver {
  constructor(
    private readonly findUserService: FindUserService,
    private readonly createUserUsecase: CreateUserUsecase,
  ) {}

  @Query(() => UserModel)
  async user(@Args('id') id: string) {
    return this.findUserService.handle({ id: parseInt(id) });
  }

  @Mutation(() => UserModel)
  async createUser(@Args('name') name: string, @Args('uid') uid: string) {
    return this.createUserUsecase.handle({
      name,
      uid,
    });
  }
}
