interface CreateNewsFormValues {
  title: string;
  imageUrl: string;
  text: string;
  highlighted: boolean;
  publishedOn: string;
  writtenBy: string;
  _ownerId?: string;
  comments?: any[];
}