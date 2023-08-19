import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { BasePageController } from 'src/common/homepage/base-page.controller';
import { BasePageService } from 'src/common/homepage/base-page.service';
import { ApiHealthIndicator } from 'src/common/homepage/checkers/api.health';
import { RedisHealthIndicator } from 'src/common/homepage/checkers/redis.health';

@Module({
  imports: [TerminusModule],
  controllers: [BasePageController],
  providers: [RedisHealthIndicator, ApiHealthIndicator, BasePageService],
})
export class BasePageModule {}
