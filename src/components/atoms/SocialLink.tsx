import React from 'react';
import { Image } from 'antd';

export type SocialLinkProps = {
  href: string;
  icon: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon }) => {
  return (
    <a target="_blank" href={href} className="">
      <Image
        src={icon}
        alt="SocialLogo"
        width={40}
        height={40}
        preview={false}
        style={{ width: 40, height: 40 }}
      />
    </a>
  );
};

export default SocialLink;
