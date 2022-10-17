import React from 'react';
import { AiOutlineYoutube } from 'react-icons/ai';
import { BasePaper } from '../../../../../../components/Client/Base';
import { ItemVideo } from './playlist.interface';

interface PropsVideoInterface {
  video: ItemVideo;
}

export function Video(props: PropsVideoInterface): JSX.Element{

  const { video } = props;

  const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  const formateDate = (date: string) => {
    return new Date(date).toLocaleDateString('es', options);
  }

  return (
    <section>
      <h4 className="mb-3 font-semibold">Reproductor</h4>
      <BasePaper>
        <section className="p-10">
          <iframe
            src={`https://www.youtube.com/embed/${video?.id?.videoId}?rel=0&color=white&showinfo=0`}
            className="w-full aspect-video mb-5"
            title={video?.snippet?.title}
            allowFullScreen
          />
          <h5 className="text-sm font-semibold">{ video?.snippet?.title }</h5>
          <small>{ formateDate(video?.snippet?.publishedAt) }</small>
          <br />
          <a href={`https://www.youtube.com/watch?v=${video?.id?.videoId}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-1 mt-3">
            <AiOutlineYoutube />
            <small>Ver en Youtube</small>
          </a>
        </section>
      </BasePaper>
    </section>
  )
}
