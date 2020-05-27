import { Resolver, ResolveField } from '@nestjs/graphql';
import { User } from './user.model';

@Resolver(() => User)
export class UserResolver {
  @ResolveField(() => String)
  resolveSomething() {
    return 'something'
  }
}
