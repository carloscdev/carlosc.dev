import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FcGraduationCap } from "react-icons/fc";
import { CustomButton } from '../CustomButton';
import { SizeButtonEnum, TagButtonEnum, TypeButtonEnum } from '../CustomButton/custom-buttom.interface';

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
    <header className="bg-secondary border-b-[0.5px] border-gray-700 fixed top-0 left-0 w-full text-white z-40">
      <nav className="content flex items-center justify-between h-20">
        <div className="tracking-widest font-semibold text-xl flex items-center gap-3">
          <FcGraduationCap className="text-3xl" />
          <Link to="/">
            carloscdev
          </Link>
        </div>
        <ul className="flex items-center">
          {
            menuList.map((item, index) => (
              <li key={index}>
                <CustomButton value={item.name} tag={TagButtonEnum.LINK} type={pathnameValidate(item.path)} size={SizeButtonEnum.MEDIUM} to={item.path} />
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  )
}
