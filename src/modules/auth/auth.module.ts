import { Module } from '@nestjs/common';
import { PrismaManager } from 'src/prisma';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaManager],
})
export class AuthModule {}
