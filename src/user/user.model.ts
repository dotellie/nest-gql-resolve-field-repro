import { ObjectType, Directive, Field, ID } from '@nestjs/graphql';

@Directive(`@key(fields: "id")`)
@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field()
  somethingElse: string;
}
