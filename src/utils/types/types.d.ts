export type BookmarkT = {
  url: string;
  title: string;
  author_name: string;
  html: string;
  height: number;
  duration?: number;
  upload_date?: string;
  provider_name: string;
  width: number;
  add_date?: number;
  id: string;
};

interface BookmarkProps {
  bookmark: BookmarkT;
  deleteBookmark: (id: string) => void;
}
interface DateOptionsT {
  [option: string]: string;
}

interface CardProps {
  label: string;
  content: string;
}

interface FormProps {
  onChange: (string: string) => void;
  onClick: () => void;
}
interface HtmlParserProps {
  id: string;
  content: string;
}

interface BookmarksProps {
  bookmarks: BookmarkT[];
  deleteBookmark: (id: string) => void;
}

interface useBookmarksT {
  bookmarks: BookmarkT[];
  createBookmark: (bookmarkData: BookmarkT) => Promise<void>;
  deleteBookmark: (id: string) => void;
  setBookmarks: Dispatch<SetStateAction<BookmarkT[]>>;
}

interface BadRequestModalProps {
  badRequest: boolean;
  setBadRequest: Dispatch<SetStateAction<boolean>>;
}
