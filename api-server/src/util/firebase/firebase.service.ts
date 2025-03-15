import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

@Injectable()
export class FirebaseService {
  constructor() {}

  async findByUid({ uid }: { uid: string }): Promise<UserRecord | null> {
    try {
      return await admin.auth().getUser(uid);
    } catch (e) {
      return null;
    }
  }

  async delete({ uid }: { uid: string }): Promise<void> {
    await admin.auth().deleteUser(uid);
  }

  async findByEmail({ email }: { email: string }): Promise<UserRecord | null> {
    try {
      return await admin.auth().getUserByEmail(email);
    } catch (e) {
      return null;
    }
  }
}
