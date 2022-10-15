import { Dispatch, SetStateAction } from "react";


export interface PlaylistInterface {
  version:       string;
  title:         Title;
  home_page_url: string;
  author:        Author;
  items:         ItemVideo[];
}

export interface Author {
  name: Title;
}

export enum Title {
  Carloscdev = "carloscdev",
}

export interface ItemVideo {
  guid:           string;
  url:            string;
  title:          string;
  date_published: string;
  author:         Author;
}

export interface PropsPlaylistInterface {
  playlist: ItemVideo[];
  currentVideo: ItemVideo;
  setCurrentVideo: Dispatch<SetStateAction<ItemVideo>>;
}
