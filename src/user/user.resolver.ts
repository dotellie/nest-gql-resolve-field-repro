import {
  Resolver,
  ResolveField,
  Query,
  ResolveReference,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { User, UserType } from './user.model';

@Resolver(() => User)
export class UserResolver {
  @ResolveField(() => String)
  resolveSomething() {
    return 'something';
  }

  @Mutation(() => String)
  something() {
    return 'something';
  }

  @Mutation(() => User)
  addUser(@Args({ type: () => UserType, name: 'type' }) type: UserType) {
    return this.makeUser();
  }

  @Query(() => User)
  getUser() {
    return this.makeUser();
  }

  @ResolveReference()
  resolveReference() {
    console.log('resolving');
    return this.makeUser();
  }

  private makeUser() {
    return { id: 'hi', type: UserType.CUSTOMER };
  }
}
