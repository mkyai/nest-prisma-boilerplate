import { Module } from '@nestjs/common';
import { PrismaManager } from 'src/prisma';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaManager],
})
export class UserModule {}
