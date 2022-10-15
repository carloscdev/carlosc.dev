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
                <li
                  key={index}
                  className={
                    `border-b cursor-pointer last:border-none gap-3 px-10 py-5 hover:text-primary flex items-center  ${currentVideo?.guid === item?.guid && 'bg-secondary text-white hover:text-white shadow bg-custom'}`
                  }
                  onClick={() => setCurrentVideo(item)}
                >
                  <img src={`http://img.youtube.com/vi/${item?.url?.slice(-11)}/hqdefault.jpg`} alt={item.title} height="50" width="50" className="rounded" loading="lazy" />
                  <strong className="text-sm">{ item.title }</strong>
                </li>
              ))
            }
          </ul>
        </section>
      </BasePaper>
    </section>
  )
}
