import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateTaskInput {
  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
