export interface CollectionResponse<T> {
  id: string;
  data: T;
  filePath: string;
  digest: string;
  collection: string;
}
