import { Injectable } from '@nestjs/common';
import { Prisma, PrismaPromise, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateSignUpInput } from '../dto/create-sign-up.input';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByUid({ uid }: { uid: string }): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        firebaseUId: uid,
      },
    });
  }

  findByEmail({ email }: { email: string }): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  }

  create({ input }: { input: CreateSignUpInput }): Promise<User> {
    return this.prisma.user.create({
      data: {
        ...input,
      },
    });
  }
}
