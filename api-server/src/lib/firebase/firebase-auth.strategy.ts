import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { Strategy } from 'passport-http-bearer';
import { DecodedIdToken } from 'firebase-admin/lib/auth/token-verifier';
import admin from 'firebase-admin';
import { FindByUidService } from 'src/user/services/fidn-by-uid.service';

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {
  constructor(private readonly findByUidService: FindByUidService) {
    super();
  }

  async validate(token: string): Promise<User> {
    try {
      const firebaseUser: DecodedIdToken = await admin
        .auth()
        .verifyIdToken(token);
      return this.findByUidService.handle({ uid: firebaseUser.uid });
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
