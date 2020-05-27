import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user/user.resolver';
import {GraphQLFederationModule} from '@nestjs/graphql';
import { PostResolver } from './post/post.resolver';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true,
      path: '/',
      context: ({ req }) => ({ req }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, UserResolver, PostResolver],
})
export class AppModule {}
