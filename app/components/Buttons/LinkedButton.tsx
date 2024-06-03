import Link from 'next/link';
import React from 'react';

interface LinkedButton {
  text: string;
  link: string;
  style: string;
}

const LinkedButton = ({ text, link, style }: LinkedButton) => {
  return (
    <Link href={link} className={style} data-testid={text.concat(link)}>
      {text}
    </Link>
  );
};

export default LinkedButton;
