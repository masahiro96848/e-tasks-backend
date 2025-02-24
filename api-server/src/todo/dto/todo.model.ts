import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  userId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  updatedAt: Date | null;
}
