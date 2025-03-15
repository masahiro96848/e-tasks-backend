import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { FirebaseAuthStrategy } from '../lib/firebase/firebase-auth.strategy';
import { FirebaseAuthGuard } from '../lib/firebase/firebase-auth.guard';
import { AuthResolver } from './resolvers/auth.resolver';
import { SignUpService } from './services/sign-up.service';
import { SignUpUsecase } from './usecases/sign-up.usecase';
import { AuthRepository } from './repositories/auth.repositories';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [UserModule, PassportModule, PrismaModule],
  providers: [
    FirebaseAuthStrategy,
    FirebaseAuthGuard,
    AuthRepository,
    AuthResolver,
    SignUpService,
    SignUpUsecase,
  ],
})
export class AuthModule {}
