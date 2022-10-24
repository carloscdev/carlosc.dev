import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { Photo, BasePaper } from '../../../../../../components/Client';

export function Profile(): JSX.Element{
  return (
    <div>
      <h4 className="mb-3 font-semibold">Perfil</h4>
      <BasePaper>
        <section className="p-10">
          <div className="flex items-center gap-5 mb-5">
            <Photo />
            <div className="w-full">
              <h5 className="font-semibold flex items-center justify-between">
                <span>Carlos Córdova</span>
                <a href="https://www.linkedin.com/in/carloscdev/" target="_blank" rel="noopener noreferrer" className="text-lg" title="Linkedin @carloscdev">
                  <AiFillLinkedin />
                </a>
              </h5>
              <p className="text-sm">Software Craftsman at Apside</p>
            </div>
          </div>
          <p className="text-sm opacity-70">
            Me considero un profesional apasionado por las tecnologías y la enseñanza.
            Uno de mis mayores logros profesionales es haber podido llegar a miles de personas
            con mis cursos / tutoriales y de esta manera contribuir con la comunidad.
          </p>
        </section>
      </BasePaper>
    </div>
  )
}
