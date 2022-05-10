import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Bookmark from "../components/bookmark/Bookmark";
import { BookmarkT } from "../utils/types/types";

describe("Bookmark", () => {
  it("Should render a bookmark with all data resolved", () => {
    const bookmarkData: BookmarkT = {
      url: "https://vimeo.com/565486457",
      author_name: "Auteur",
      height: 240,
      upload_date: "2021-06-21 02:42:24",
      title: "Sylvain Lhommée @ Nation Entreprenante - Episode #5",
      html: '<iframe src="https://player.vimeo.com/video/565486457?h=e0568b6bc1&amp;app_id=122963" width="326" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sylvain Lhomm&amp;eacute;e @ Nation Entreprenante - Episode #5"></iframe>',
      duration: 1070,
      provider_name: "Vimeo",
      width: 426,
      id: "id-01",
      add_date: new Date().getTime(),
    };
    const deleteBookmarkMockedEvent = jest.fn();
    const Component = render(
      <Bookmark
        bookmark={bookmarkData}
        deleteBookmark={deleteBookmarkMockedEvent}
      />
    );
    expect(Component).toMatchSnapshot();
  });
  it("Should render correctly Vimeo bookmarks", () => {
    const bookmarkData: BookmarkT = {
      url: "https://vimeo.com/565486457",
      author_name: "Auteur",
      height: 240,
      upload_date: "2021-06-21 02:42:24",
      title: "Sylvain Lhommée @ Nation Entreprenante - Episode #5",
      html: '<iframe src="https://player.vimeo.com/video/565486457?h=e0568b6bc1&amp;app_id=122963" width="326" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sylvain Lhomm&amp;eacute;e @ Nation Entreprenante - Episode #5"></iframe>',
      duration: 1070,
      provider_name: "Vimeo",
      width: 426,
      id: "id-01",
      add_date: new Date().getTime(),
    };
    const deleteBookmarkMockedEvent = jest.fn();
    const Component = render(
      <Bookmark
        bookmark={bookmarkData}
        deleteBookmark={deleteBookmarkMockedEvent}
      />
    );
    expect(Component.getByText("Durée :")).toBeInTheDocument();
  });
  it("Should render correctly Flickr bookmarks", () => {
    const bookmarkData: BookmarkT = {
      html: '<a data-flickr-embed="true" href="https://www.flickr.com/photos/feuilllu/45771361701/" title="2018 Visite de Klaxoon by Pierre Metivier, on Flickr"><img alt="2018 Visite de Klaxoon" height="685" src="https://noembed.com/i/https://live.staticflickr.com/4817/45771361701_2678123510_b.jpg" width="1024"></a><script async src="https://embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>',
      title: "2018 Visite de Klaxoon",
      width: 1024,
      id: "id-02",
      provider_name: "Flickr",
      url: "https://www.flickr.com/photos/feuilllu/45771361701/",
      height: 685,
      author_name: "Pierre Metivier",
    };
    const deleteBookmarkMockedEvent = jest.fn();
    const Component = render(
      <Bookmark
        bookmark={bookmarkData}
        deleteBookmark={deleteBookmarkMockedEvent}
      />
    );
    expect(Component.getByText("Largeur x Hauteur :")).toBeInTheDocument();
  });

  it("Should remove the bookmark with the function passed as props", () => {
    const bookmarkData: BookmarkT = {
      url: "https://vimeo.com/565486457",
      author_name: "Auteur",
      height: 240,
      upload_date: "2021-06-21 02:42:24",
      title: "Sylvain Lhommée @ Nation Entreprenante - Episode #5",
      html: '<iframe src="https://player.vimeo.com/video/565486457?h=e0568b6bc1&amp;app_id=122963" width="326" height="240" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="Sylvain Lhomm&amp;eacute;e @ Nation Entreprenante - Episode #5"></iframe>',
      duration: 1070,
      provider_name: "Vimeo",
      width: 426,
      id: "id-01",
      add_date: new Date().getTime(),
    };
    const deleteBookmarkMockedEvent = jest.fn();
    const Component = render(
      <Bookmark
        bookmark={bookmarkData}
        deleteBookmark={deleteBookmarkMockedEvent}
      />
    );
    expect(Component.getByTestId("bookmark")).toBeInTheDocument();
    expect(deleteBookmarkMockedEvent).not.toHaveBeenCalled();
    fireEvent.click(Component.getByTestId("button"));
    expect(deleteBookmarkMockedEvent).toHaveBeenCalled();
  });
});
