import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './resolvers/user.resolver';
import { CreateUserService } from './services/create-user.service';
import { FindUserService } from './services/find-user.service';
import { CreateUserUsecase } from './usecase/create-user.usecase';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindByUidService } from './services/fidn-by-uid.service';
import { UpdateUserService } from './services/update-user.service';
import { FirebaseService } from 'src/util/firebase/firebase.service';
import { DeleteUserService } from './services/delete-user.service';
import { DeleteUserUsecase } from './usecase/delete-user.usecase';

@Module({
  imports: [PrismaModule],
  providers: [
    PrismaService,
    UserRepository,
    UserResolver,
    FindUserService,
    FindByUidService,
    CreateUserService,
    CreateUserUsecase,
    UpdateUserService,
    FirebaseService,
    DeleteUserService,
    DeleteUserUsecase,
  ],
  exports: [
    FindUserService,
    CreateUserService,
    FindByUidService,
    CreateUserUsecase,
    UpdateUserService,
    FirebaseService,
    DeleteUserService,
    DeleteUserUsecase,
  ],
})
export class UserModule {}
