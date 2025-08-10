import React from 'react';

export type LinkProps = {
  href: string;
  label: string;
};
type LinksListProps = {
  title: string;
  links: LinkProps[];
};

const LinksList: React.FC<LinksListProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-[20px] items-start text-start text-white">
      <h3 className="leading-[130%] font-bold">{title}</h3>
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="leading-[150%] font-normal hover:underline"
        >
          {label}
        </a>
      ))}
    </div>
  );
};

export default LinksList;
