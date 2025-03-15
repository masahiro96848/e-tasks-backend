import { Field, HideField, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthModel {
  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @HideField()
  password: string;

  @Field(() => String)
  firebaseUId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
