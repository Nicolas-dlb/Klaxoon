import React, { useEffect, useState } from "react";
import { BookmarkProps, DateOptionsT } from "../../utils/types/types";
import "./Bookmark.css";
import Card from "../card/Card";
import HtmlParser from "../htmlParser/HtmlParser";

function Bookmark({ bookmark, deleteBookmark }: BookmarkProps) {
  const [timeFromUpload, setTimeFromUpload] = useState(0);
  const DateOptions: DateOptionsT = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  useEffect(() => {
    const updateTimeFromUpload = setInterval(() => {
      const currentTime = new Date().getTime();
      const newTimeFromUpload = new Date(
        currentTime - (bookmark.add_date as number)
      ).getMinutes();
      setTimeFromUpload(newTimeFromUpload);
    }, 60000);
    return () => clearInterval(updateTimeFromUpload);
  }, []);

  return (
    <div data-testid="bookmark" className="bookmark">
      <HtmlParser id={bookmark.id} content={bookmark.html} />
      <h4>{bookmark?.title}</h4>
      <div className="info">
        <Card label="Auteur :" content={bookmark.author_name} />
        <Card label="Url :" content={bookmark.url} />
        {bookmark.provider_name === "Vimeo" && bookmark.duration ? (
          <>
            <Card
              label="Durée :"
              content={new Date(bookmark.duration * 1000)
                .toISOString()
                .substr(11, 8)}
            />
            <Card
              label="Date de création :"
              content={`le ${new Date(
                (bookmark.upload_date as string).split(" ")[0]
              ).toLocaleDateString("fr-FR", DateOptions)}`}
            />
          </>
        ) : (
          <Card
            label="Largeur x Hauteur :"
            content={`${bookmark.width} x ${bookmark.height}`}
          />
        )}
        <Card
          label={"Date d'ajout :"}
          content={
            timeFromUpload >= 1
              ? `Il y a ${timeFromUpload} ${
                  timeFromUpload > 1 ? "minutes" : "minute"
                }`
              : `À l'instant`
          }
        />
        <button
          data-testid="button"
          type="button"
          onClick={() => deleteBookmark(bookmark.id)}
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}

export default Bookmark;
