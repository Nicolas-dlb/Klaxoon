import { useState } from "react";
import { uniqueId } from "../helpers/helpers";
import { BookmarkT, useBookmarksT } from "../types/types";

export default function useBookmarks(): useBookmarksT {
  const [bookmarks, setBookmarks] = useState<BookmarkT[]>([]);

  function deleteBookmark(id: string): void {
    setBookmarks(
      bookmarks?.filter((bookmark: BookmarkT) => bookmark.id !== id)
    );
  }
  function createBookmark(bookmark: BookmarkT): Promise<void> {
    bookmark.add_date = new Date().getTime();
    bookmark.id = uniqueId();
    if (
      bookmark.provider_name === "Vimeo" ||
      bookmark.provider_name === "Flickr"
    ) {
      setBookmarks([...bookmarks, bookmark]);
      return Promise.resolve();
    }
    return Promise.reject();
  }

  return { bookmarks, setBookmarks, deleteBookmark, createBookmark };
}
