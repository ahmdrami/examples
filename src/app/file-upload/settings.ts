import { InjectionToken } from '@angular/core';

export const FILE_UPLOAD_CONFIG = new InjectionToken<FileUploadConfig>('file-upload-config');

export interface FileUploadConfig {
    maxFileSize: number;
    multiple: boolean;
}
