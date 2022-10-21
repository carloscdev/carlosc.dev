import React from 'react';
import { IconType } from 'react-icons';
import { AiOutlineGithub, AiOutlineCodepen, AiOutlineYoutube, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiUdemy } from 'react-icons/si';

interface SocialListInterface {
  url: string;
  icon: IconType;
}

export function Social(): JSX.Element {

  const socialList: SocialListInterface[] = [
    {
      url: 'https://www.youtube.com/c/carloscdev/',
      icon: AiOutlineYoutube
    },
    {
      url: 'https://www.udemy.com/user/carloscdev/',
      icon: SiUdemy
    },
    {
      url: 'https://github.com/carloscdev',
      icon: AiOutlineGithub
    },
    {
      url: 'https://codepen.io/carloscdev',
      icon: AiOutlineCodepen
    },
    {
      url: 'https://www.instagram.com/carlosc.dev/',
      icon: AiOutlineInstagram
    },
    {
      url: 'https://twitter.com/carloscdev',
      icon: AiOutlineTwitter
    }
  ]

  return (
    <ul className="flex items-center gap-3 text-2xl">
      {
        socialList.map((item, index) => (
          <li key={index} className="opacity-70 hover:opacity-100">
            <a href={item.url} target="_blank" rel="noopener noreferrer" title="Icon Social Media">
              <item.icon />
            </a>
          </li>
        ))
      }
    </ul>
  )
}
