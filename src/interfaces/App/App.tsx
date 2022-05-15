import React, { useState } from "react";
import "./App.css";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";
import Bookmarks from "../Bookmarks/Bookmarks";
import getBookmarkData from "../../utils/api/api";
import useBookmarks from "../../utils/hooks/useBookmarks";
import BadRequestModal from "../../components/badRequestModal/BadRequestModal";

function App(): JSX.Element {
  const [url, setUrl] = useState("");
  const [badRequest, setBadRequest] = useState<boolean>(false);
  const { bookmarks, createBookmark, deleteBookmark } = useBookmarks();

  return (
    <div className="app">
      <Header />
      <Form
        onChange={setUrl}
        onClick={() =>
          getBookmarkData(url).then((bookmarkData) =>
            createBookmark(bookmarkData).catch(
              () => !badRequest && setBadRequest(true)
            )
          )
        }
      />
      <Bookmarks bookmarks={bookmarks} deleteBookmark={deleteBookmark} />
      {badRequest && (
        <BadRequestModal
          badRequest={badRequest}
          setBadRequest={setBadRequest}
        />
      )}
    </div>
  );
}

export default App;
