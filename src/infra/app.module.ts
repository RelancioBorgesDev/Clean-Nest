import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

import { AuthModule } from './auth/auth.module';
import { envSchema } from './env/env';
import { HttpModule } from './http/http.module';
import { EnvModule } from './env/env.module';
import { CloudinaryModule } from './storage/cloudinary/cloudinary.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    AuthModule,
    HttpModule,
    EnvModule,
    EventsModule,
  ],

  providers: [PrismaService],
})
export class AppModule {}
