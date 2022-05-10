import { BookmarkT } from "../types/types";

export default async function getBookmarkData(url: string): Promise<BookmarkT> {
  const request = await fetch(`https://noembed.com/embed?url=${url}`);
  const bookmark: BookmarkT = await request.json();
  return bookmark;
}
