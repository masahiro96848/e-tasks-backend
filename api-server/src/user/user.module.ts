import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './resolvers/user.resolver';
import { FindUserService } from './services/find-user.service';
import { UserRepository } from './repositories/user.repository';
import { PrismaService } from 'src/prisma/prisma.service';
import { FindByUidService } from './services/fidn-by-uid.service';
import { FirebaseService } from 'src/util/firebase/firebase.service';

@Module({
  imports: [PrismaModule],
  providers: [
    PrismaService,
    UserRepository,
    UserResolver,
    FindUserService,
    FindByUidService,
    FirebaseService,
  ],
  exports: [FindUserService, FindByUidService, FirebaseService],
})
export class UserModule {}
