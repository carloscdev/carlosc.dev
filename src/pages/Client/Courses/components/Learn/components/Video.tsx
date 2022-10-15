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
            src={`https://www.youtube.com/embed/${video?.url?.slice(-11)}?rel=0&color=white&showinfo=0`}
            className="w-full aspect-video mb-5"
            title={video.title}
            allowFullScreen
          />
          <h5 className="text-sm font-semibold">{ video.title }</h5>
          <small>{ formateDate(video.date_published) }</small>
          <br />
          <a href={video.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center gap-1 mt-3">
            <AiOutlineYoutube />
            <small>Ver en Youtube</small>
          </a>
        </section>
      </BasePaper>
    </section>
  )
}
