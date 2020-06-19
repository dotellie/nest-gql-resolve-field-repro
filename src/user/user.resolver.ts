import {
  Resolver,
  ResolveField,
  Query,
  ResolveReference,
} from '@nestjs/graphql';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  @ResolveField(() => String)
  resolveSomething() {
    return 'something';
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
    return { id: 'hi', somethingElse: 'also hi' };
  }
}
