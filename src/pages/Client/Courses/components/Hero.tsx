import React from 'react';
import { BaseButton } from '../../../../components/Client/Base';
import { TagButtonEnum, TypeButtonEnum } from '../../../../components/Client/Base/BaseButton/base-button.interface';

export function Hero():JSX.Element {

  const redirectLearn = () => {
    const about = document.getElementById('learn') as HTMLElement;
    window.scroll({ top: about.getBoundingClientRect().y, left: 0, behavior: "smooth" });
  }

  return (
    <section className="py-40 bg-custom bg-secondary">
      <div className="content text-white grid md:grid-cols-[1fr,_0.7fr] items.center gap-5">
        <div>
          <h2>
            Cursos y Tutoriales
            <br />
            <span className="text-primary">
              100% Gratuitos
            </span>
          </h2>
          <p className="opacity-70 text-xl py-10">
          Cada video lo realizo con mi mayor esfuerzo y siempre
          estoy en constante aprendizaje para ofrecer una mejor calidad.
          </p>
          <div className="flex items-center gap-5">
            <BaseButton value="Aprender" tag={TagButtonEnum.BUTTON} action={redirectLearn} />
            <BaseButton value="Youtube" tag={TagButtonEnum.A} type={TypeButtonEnum.OUTLINE} to='https://www.youtube.com/c/carloscdev/' />
          </div>
        </div>
      </div>
    </section>
  )
}
