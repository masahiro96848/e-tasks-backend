import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { FirebaseAuthStrategy } from './firebase-auth.strategy';
import { FirebaseAuthGuard } from './firebase-auth.guard';

@Module({
  imports: [UserModule, PassportModule],
  providers: [FirebaseAuthStrategy, FirebaseAuthGuard],
})
export class AuthModule {}
