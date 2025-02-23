import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Todo {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => Boolean)
  completed: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
