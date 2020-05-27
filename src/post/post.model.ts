import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => String)
  value: string;
}
