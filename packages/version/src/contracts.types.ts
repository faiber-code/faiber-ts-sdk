/** Stable raw receipt; publication can succeed even when the parent service is inactive. */
export interface ApkPublishReceipt { status: 'success'; id: string }
/** Camel-case JSON metadata; send only with a trusted server publisher credential. */
export interface ApkPublishInput {
  /** 1–100 ASCII letters, digits or hyphens; identifies the deployment-local catalog service. */
  serviceSlug: string;
  /** Nonblank application name, at most 80 Unicode characters. */
  appName: string;
  /** 1–40 ASCII letters, digits, dots, hyphens or underscores; stable release identity within a slug. */
  version: string;
  /** Positive integer code; stay within JavaScript's safe integer range. Lower retry codes do not overwrite higher codes. */
  versionCode: number;
  /** Absolute HTTPS URL without username or password; stored without fetching the artifact. */
  downloadUrl: string;
}
