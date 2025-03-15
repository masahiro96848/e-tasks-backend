import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SignUpService } from '../services/sign-up.service';
import { UserModel } from 'src/user/models/user.model';
import { CreateSignUpInput } from '../dto/create-sign-up.input';
import { SignUpUsecase } from '../usecases/sign-up.usecase';

@Resolver()
export class AuthResolver {
  constructor(private readonly signUpUsecase: SignUpUsecase) {}

  @Mutation(() => UserModel)
  async signUp(@Args('input') input: CreateSignUpInput): Promise<UserModel> {
    return this.signUpUsecase.handle({ input });
  }
}
