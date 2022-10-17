import React, { useEffect, useState } from 'react';
import { Playlist, Video } from './components';
import { ItemVideo, PlaylistInterface } from './components/playlist.interface';

export function Learn(): JSX.Element {
  const [playlist, setPlaylist] = useState({} as PlaylistInterface);
  const [currentVideo, setCurrentVideo] = useState({} as ItemVideo);

  const PARAMS = {
    key: import.meta.env.VITE_API_KEY_YOUTUBE,
    part: 'snippet',
    maxResults: '20',
    channelId: 'UCIpwDrk2cmOhsfBtHcWHDHA',
    order: 'date'
  };
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const getAllVideos = async () => {
    try {
      const data = await fetch(BASE_URL + '?' + new URLSearchParams(PARAMS));
      const response: PlaylistInterface = await data.json();
      setPlaylist(response);
      setCurrentVideo(response.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllVideos();
  }, [])

  return (
    <section className="py-20" id='learn'>
      <div className="content">
        <h2 className="text-center mb-10">
          Tutoriales
        </h2>
        <main className="grid md:grid-cols-[1fr,_0.7fr] gap-10">
          <div className="grid gap-10">
            <Video video={currentVideo} />
          </div>
          <div className="grid gap-10">
            <Playlist currentVideo={currentVideo} playlist={playlist?.items} setCurrentVideo={setCurrentVideo} />
          </div>
        </main>
      </div>
    </section>
  )
}
