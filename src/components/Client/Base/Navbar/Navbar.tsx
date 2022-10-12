import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BaseButton } from '../BaseButton';
import { SizeButtonEnum, TagButtonEnum, TypeButtonEnum } from '../BaseButton/base-button.interface';

export function Navbar() {
  const { pathname } = useLocation()
  const pathnameValidate = (path: string) => path === pathname ? TypeButtonEnum.PRIMARY : TypeButtonEnum.NONE
  const menuList = [
    {
      path: '/',
      name: 'Sobre Mi'
    },
    {
      path: '/test',
      name: 'Cursos'
    }
  ]

  return (
    <header className="bg-secondary border-b-[0.5px] border-gray-700 fixed top-0 left-0 w-full text-white z-40 bg-custom">
      <nav className="content flex items-center justify-between h-20">
        <div className="tracking-widest font-semibold text-xl flex items-center gap-3 hover:text-primary">
          <Link to="/">
            carlosc.dev
          </Link>
        </div>
        <ul className="items-center hidden sm:flex">
          {
            menuList.map((item, index) => (
              <li key={index}>
                <BaseButton value={item.name} tag={TagButtonEnum.LINK} type={pathnameValidate(item.path)} size={SizeButtonEnum.MEDIUM} to={item.path} />
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
