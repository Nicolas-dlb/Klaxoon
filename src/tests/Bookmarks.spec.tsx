import React from "react";
import { render } from "@testing-library/react";
import Bookmarks from "../interfaces/Bookmarks/Bookmarks";
import { BookmarkT } from "../utils/types/types";

describe("Bookmarks", () => {
  let Wrapper;
  let bookmarksFound: string | HTMLElement[];
  beforeEach(() => {
    const bookmarksArray: BookmarkT[] = [
      {
        url: "https://vimeo.com/565486457",
        author_name: "BARTERLINK",
        height: 240,
        upload_date: "2021-06-21 02:42:24",
        title: "Sylvain Lhommée @ Nation Entreprenante - Episode #5",
        html: '<iframe src="https://player.vimeo.com/video/565486457?h=e0568b6bc1&amp;app_id=122963" width="326" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sylvain Lhomm&amp;eacute;e @ Nation Entreprenante - Episode #5"></iframe>',
        duration: 1070,
        provider_name: "Vimeo",
        width: 426,
        id: "id-01",
      },
      {
        html: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/feuilllu/45771361701/" title="2018 Visite de Klaxoon by Pierre Metivier, on Flickr"><img alt="2018 Visite de Klaxoon" height="685" src="https://noembed.com/i/https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg" width="1024"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
        title: "2018 Visite de Klaxoon",
        width: 1024,
        id: "id-02",
        provider_name: "Flickr",
        url: "https://www.flickr.com/photos/feuilllu/45771361701/",
        height: 685,
        author_name: "Pierre Metivier",
      },
    ];
    Wrapper = render(
      <Bookmarks bookmarks={bookmarksArray} deleteBookmark={() => true} />
    );
    bookmarksFound = Wrapper.getAllByTestId("bookmark");
  });
  it("Should render bookmarks", () => {
    expect(bookmarksFound).toBeTruthy();
  });

  it("Should render all bookmarks passed as props", () => {
    expect(bookmarksFound.length).toBe(2);
  });
});
