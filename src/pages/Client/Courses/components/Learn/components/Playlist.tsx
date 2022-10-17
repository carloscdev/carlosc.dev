import React from 'react';
import { BasePaper } from '../../../../../../components/Client/Base';
import { PropsPlaylistInterface } from './playlist.interface';

export function Playlist(props: PropsPlaylistInterface): JSX.Element{

  const { currentVideo, playlist, setCurrentVideo } = props;

  return (
    <section>
      <h4 className="mb-3 font-semibold">Playlist</h4>
      <BasePaper>
        <section className="">
          <ul className="max-h-[475px] overflow-y-auto">
            {
              playlist?.map((item, index): JSX.Element=> (
                <li key={index}>
                  {
                    item.id.videoId && (
                      <div
                        className={
                          `border-b cursor-pointer last:border-none gap-3 px-10 py-5 hover:text-primary flex items-center  ${currentVideo?.id?.videoId === item?.id?.videoId && 'bg-secondary text-white hover:text-white shadow bg-custom'}`
                        }
                        onClick={() => setCurrentVideo(item)}
                      >
                        <img src={item.snippet.thumbnails.default.url} alt={item.snippet.title} height="50" width="50" className="rounded" loading="lazy" />
                        <strong className="text-sm">{ item.snippet.title }</strong>
                      </div>
                    )
                  }
                </li>
              ))
            }
          </ul>
        </section>
      </BasePaper>
    </section>
  )
}
