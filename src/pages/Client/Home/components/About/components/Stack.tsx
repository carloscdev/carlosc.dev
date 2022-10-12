import React from 'react';
import Html from '../../../../../../assets/stack/html.svg';
import Css from '../../../../../../assets/stack/css.svg';
import Js from '../../../../../../assets/stack/js.svg';
import Ts from '../../../../../../assets/stack/ts.svg';
import Git from '../../../../../../assets/stack/git.svg';
import Tailwind from '../../../../../../assets/stack/tailwind.svg';
import VueJs from '../../../../../../assets/stack/vue.svg';
import ReactJs from '../../../../../../assets/stack/react.svg';
import NodeJs from '../../../../../../assets/stack/node.svg';
import Express from '../../../../../../assets/stack/express.svg';
import Mongo from '../../../../../../assets/stack/mongo.svg';
import Python from '../../../../../../assets/stack/python.svg';
import Django from '../../../../../../assets/stack/django.svg';
import Postgres from '../../../../../../assets/stack/postgres.svg';
import Figma from '../../../../../../assets/stack/figma.svg';
import Scss from '../../../../../../assets/stack/scss.svg';
import { BasePaper } from '../../../../../../components/Client/Base';

export function Stack(): JSX.Element{

  const stackList: string[] = [
    Html, Css, Scss, Js, Ts, Git,
    Tailwind, VueJs, ReactJs,
    NodeJs, Express, Python, Django,
    Mongo, Postgres, Figma
  ]

  return (
    <div>
      <h4 className="mb-3 font-semibold">Tecnologías Preferidas</h4>
      <BasePaper>
        <ul className="flex items-center justify-between gap-5 p-10 flex-wrap">
          {
            stackList.map((item, index): JSX.Element=> (
              <li key={index} className="flex h-16 w-16 border rounded-full items-center justify-center hover:-translate-y-1 ease-in duration-100">
                <img src={item} alt="Stack Icon" width="40" height="40" loading="lazy" />
              </li>
            ))
          }
        </ul>
      </BasePaper>
    </div>
  )
}
