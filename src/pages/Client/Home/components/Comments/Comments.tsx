import React, { useRef } from 'react';
import Carousel from 'react-tiny-slider'
import Daniel from '../../../../../assets/users/daniel.png';
import Aldo from '../../../../../assets/users/aldo.png';
import { BasePaper } from '../../../../../components/Client/Base';
import { HiOutlineExternalLink } from 'react-icons/hi';
import './Comments.css';

export function Comments(): JSX.Element {

  const carousel = useRef(null)

  const settings = {
    loop: true,
    speed: 1000,
    controls: false,
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayHoverPause: true,
    ref: carousel,
    animateIn: 'in',
    animateOut: 'out',
    responsive: {
      768: {
        items: 2,
        gutter: 10
      }
    }
  };

  const commentList = [
    {
      image: Daniel,
      name: 'Daniel Castro',
      charge: 'Front-end Developer Freelance',
      url: 'https://github.com/djcadaniel',
      description: 'Carlos me ayudó a mejorar mis habilidades como desarrollador front-end. Siempre está dispuesto a ayudar y compartir sus conocimientos con los demás.'
    },
    {
      image: Aldo,
      name: 'Aldo Ordoñez',
      charge: 'Front-end at Time Jobs',
      url: 'https://aldo.codes',
      description: 'Es una excelente persona y profesional, muy capaz y con mucho talento. Es genial como amigo y siempre da los consejos adecuados.'
    },
    {
      image: Daniel,
      name: 'Daniel Castro',
      charge: 'Front-end Developer Freelance',
      url: 'https://github.com/djcadaniel',
      description: 'Carlos me ayudó a mejorar mis habilidades como desarrollador front-end. Siempre está dispuesto a ayudar y compartir sus conocimientos con los demás. '
    },
    {
      image: Aldo,
      name: 'Aldo Ordoñez',
      charge: 'Full Stack at Time Jobs',
      url: 'https://aldo.codes',
      description: 'Es una excelente persona y profesional, muy capaz y con mucho talento. Es genial como amigo y siempre da los consejos adecuados.'
    }
  ]


  return (
    <section className="content py-20">
      <h2 className="text-center mb-10">Comentarios</h2>
      <Carousel {...settings} navPosition='bottom' mode='gallery'>
          {commentList.map((item, index) => (
            <div className="relative" key={index}>
              <BasePaper>
                <div className="p-10">
                  <div className="flex items-center gap-3 mb-5">
                    <img src={item.image} alt={item.name} width="50" />
                    <a className="font-semibold" href={item.url} target="_blank" rel="noopener noreferrer">
                      { item.name }
                      <HiOutlineExternalLink className="inline ml-3" />
                      <small className="opacity-70 block font-light text-xs">
                        { item.charge }
                      </small>
                    </a>
                  </div>
                  <p className="opacity-70">
                    { item.description }
                  </p>
                </div>
              </BasePaper>
            </div>
          ))}
      </Carousel>
    </section>
  )
}
