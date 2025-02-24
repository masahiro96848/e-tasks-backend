import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './resolvers/user.resolver';
import { CreateUserService } from './services/create-user.service';
import { FindUserService } from './services/find-user.service';
import { CreateUserUsecase } from './usecase/create-user.usecase';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [
    PrismaService,
    UserRepository,
    UserResolver,
    FindUserService,
    CreateUserService,
    CreateUserUsecase,
  ],
  exports: [FindUserService, CreateUserService],
})
export class UserModule {}
