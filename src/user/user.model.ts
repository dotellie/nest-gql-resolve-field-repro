import {
  ObjectType,
  Directive,
  Field,
  ID,
  registerEnumType,
} from '@nestjs/graphql';

export enum UserType {
  ADMIN,
  CUSTOMER,
}

registerEnumType(UserType, { name: 'UserType' });

@Directive(`@key(fields: "id")`)
@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;

  @Field(() => UserType)
  type: UserType;
}
