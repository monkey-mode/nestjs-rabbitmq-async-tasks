import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { QueueModule } from 'src/queues/queues.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), QueueModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
