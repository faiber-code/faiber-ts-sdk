import { ServiceApi, type RequestOptions } from '@faiber/sdk-core';
import type { MediaUploadImagePostResponse } from './operations.types.js';

/** Native Axios upload progress, cancellation, timeout, and an optional multipart filename. */
export interface LmsImageUploadOptions extends RequestOptions<FormData> {
    fileName?: string;
}

/** Uploads image bytes before their URL is saved on a question, option, homework, or course. */
export class LmsMediaApi extends ServiceApi {
    /**
     * Upload a PNG, JPEG, WebP, or GIF (at most 10 MiB) using the authenticated LMS image endpoint.
     * Pass onUploadProgress for byte progress and signal for cancellation. Resolves only after storage succeeds;
     * 100% byte progress alone does not mean the image has been stored. Requires lms:course:update.
     * Returns the complete Axios response with data.data.url and data.data.key; save the URL on the desired record separately.
     * Throws AxiosError for authorization, validation, storage, cancellation, and network failures.
     */
    uploadImage(image: Blob, options: LmsImageUploadOptions = {}) {
        const { fileName, ...request } = options;
        const form = new FormData();
        form.append('image', image, fileName ?? (typeof File !== 'undefined' && image instanceof File ? image.name : 'image'));
        return this.client.post<MediaUploadImagePostResponse, FormData>('/api/v1/media/images', form, request);
    }
}
