import React from "react";
import Bookmark from "../../components/bookmark/Bookmark";
import { BookmarksProps, BookmarkT } from "../../utils/types/types";
import "./Bookmarks.css";

function Bookmarks({ bookmarks, deleteBookmark }: BookmarksProps): JSX.Element {
  return (
    <div data-testid="bookmarksWrapper" className="bookmarks">
      {bookmarks.map((bookmark: BookmarkT) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          deleteBookmark={deleteBookmark}
        />
      ))}
    </div>
  );
}

export default Bookmarks;
