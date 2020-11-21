const S3_BASE_URL = "https://losmataron.s3.amazonaws.com/";

export function getImageUrl(fileName: string) {
  return S3_BASE_URL + fileName;
}
