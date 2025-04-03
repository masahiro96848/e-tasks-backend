import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTaskCardInput {
  @Field(() => String)
  title: string;
}
