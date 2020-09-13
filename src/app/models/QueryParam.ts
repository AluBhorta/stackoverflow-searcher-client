export type QueryParam = {
  q: string;
  body: string;
  title: string;
  url: string;
  tagged: string;
  nottagged: string;
  order: 'desc' | 'asc';
  sort: 'activity' | 'creation' | 'votes' | 'relevance';
  accepted: boolean;
  closed: boolean;
  migrated: boolean;
  wiki: boolean;
  notice: boolean;
  answers: number;
  views: number;
  user: number;
};
