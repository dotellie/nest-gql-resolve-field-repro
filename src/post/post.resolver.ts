import { Resolver, Query } from '@nestjs/graphql';
import { Post } from './post.model';

@Resolver(() => Post)
export class PostResolver {
  @Query(() => Post, { name: 'getPost' })
  getPost() {
    return {
      value: 'test',
    };
  }
}
