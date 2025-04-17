import { Module } from '@nestjs/common';
import { CloudinaryUploader } from './cloudinary-uploader';
import { Uploader } from '@/domain/forum/application/storage/uploader';
import { EnvModule } from '@/infra/env/env.module';

@Module({
  imports: [EnvModule],
  providers: [
    {
      provide: Uploader,
      useClass: CloudinaryUploader,
    },
  ],
  exports: [Uploader],
})
export class CloudinaryModule {}
