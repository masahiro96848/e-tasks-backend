import { Field, Int, ObjectType } from '@nestjs/graphql';
import { TaskFolderModel } from 'src/task/taskFolder/models/task-folder.model';
import { TaskItemModel } from 'src/task/taskItem/models/task-item.model';
import { UserModel } from 'src/user/models/user.model';

@ObjectType()
export class TaskCardModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => Int)
  order: number;

  @Field(() => Boolean)
  isArchived: boolean;

  @Field(() => String)
  folderId: string;

  @Field(() => String)
  userId: string;

  @Field(() => TaskFolderModel)
  folder: TaskFolderModel;

  @Field(() => UserModel)
  user: UserModel;

  @Field(() => [TaskItemModel])
  taskItems: TaskItemModel[];

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
