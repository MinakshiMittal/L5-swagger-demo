export type User = {
  id: string;
  email: string;
  name: string;
};

export type FetchedUser = {
  users: User[];
  prevUrl: string;
  nextUrl: string;
  currentPage: string;
};
