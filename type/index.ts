export interface NewsType {
  author: string | null;
  content: string | null;
  description: string | null;
  published_at: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
  image: string;
}
export interface NewsResponseType {
  config: {};
  data: { state: string; totalResult: number; articles: NewsType };
  headers: {};
  request: {};
  state: number;
  statusText: string;
}
