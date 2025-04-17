import {
  UploadParams,
  Uploader,
} from '@/domain/forum/application/storage/uploader';
import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { EnvService } from '@/infra/env/env.service';
import { randomUUID } from 'node:crypto';

@Injectable()
export class CloudinaryUploader implements Uploader {
  constructor(private envService: EnvService) {
    cloudinary.config({
      cloud_name: this.envService.get('CLOUDINARY_CLOUD_NAME'),
      api_key: this.envService.get('CLOUDINARY_API_KEY'),
      api_secret: this.envService.get('CLOUDINARY_API_SECRET'),
    });
  }

  async upload({
    fileName,
    fileType,
    body,
  }: UploadParams): Promise<{ url: string }> {
    const uploadId = randomUUID();
    const uniqueFileName = `${uploadId}-${fileName}`;

    const result = await new Promise<{ secure_url: string }>(
      (resolve, reject) => {
        cloudinary.uploader
          .upload_stream(
            {
              resource_type: 'auto',
              public_id: uniqueFileName,
              folder: 'uploads',
            },
            (error, result) => {
              if (error || !result) {
                return reject(error);
              }
              resolve(result as { secure_url: string });
            },
          )
          .end(body);
      },
    );

    return {
      url: result.secure_url,
    };
  }
}
