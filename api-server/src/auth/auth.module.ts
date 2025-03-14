import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { FirebaseAuthStrategy } from '../lib/firebase/firebase-auth.strategy';
import { FirebaseAuthGuard } from '../lib/firebase/firebase-auth.guard';

@Module({
  imports: [UserModule, PassportModule],
  providers: [FirebaseAuthStrategy, FirebaseAuthGuard],
})
export class AuthModule {}
