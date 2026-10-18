/** Wire models reviewed against the pinned service handlers and repositories. */
export interface ApkPublishReceipt { status: 'success'; id: string }
export interface ApkPublishInput { serviceSlug: string; appName: string; version: string; versionCode: number; downloadUrl: string }

