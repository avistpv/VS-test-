import {
  footerBG,
  socialFB,
  socialTT,
  socialIG,
  socialYT,
} from '../../assets/icons/index';
import LinksList from '../molecules/LinksList.tsx';
import type { LinkProps } from '../molecules/LinksList.tsx';
import FooterLogo from '../../assets/icons/headerLogo/logo-dark.svg';
import { Image } from 'antd';
import { Button, Input, Text, Title } from '../atoms';
import SocialLink, { type SocialLinkProps } from '../atoms/SocialLink.tsx';

const mainLinks: LinkProps[] = [
  {
    href: '123123',
    label: 'Про нас',
  },
  {
    href: '123124',
    label: 'Новинки',
  },
  {
    href: '123125',
    label: 'Білизна',
  },
  {
    href: '123126',
    label: 'Домашній одяг',
  },
  {
    href: '123127',
    label: 'Акції',
  },
];

const clientsLinks: LinkProps[] = [
  {
    href: '123123',
    label: 'Доставка та оплата',
  },
  {
    href: '123124',
    label: 'Обмін та повернення',
  },
  {
    href: '123125',
    label: 'Підбір розміру',
  },
  {
    href: '123126',
    label: 'Блог',
  },
];

const socialLinks: SocialLinkProps[] = [
  {
    href: 'https://www.tiktok.com/',
    icon: socialTT,
  },
  {
    href: 'https://www.instagram.com/',
    icon: socialIG,
  },
  {
    href: 'https://www.facebook.com/',
    icon: socialFB,
  },
  {
    href: 'https://www.youtube.com/',
    icon: socialYT,
  },
];

const Footer = () => {
  return (
    <footer
      style={{ backgroundImage: `url(${footerBG})` }}
      className="bg-cover bg-center bg-no-repeat
    mx-auto text-center overflow-hidden"
    >
      <div className="bg-black/30 backdrop-blur-none w-[100%] h-[100%] flex justify-center items-center">
        <div className="bg-[rgba(18,18,18,0.2)] backdrop-blur-lg rounded-[20px] flex flex-col items-center w-[100%] h-[100%] min-h-[512px] max-w-[1268px] px-[26px] py-[30px]">
          <div className="flex items-center w-full">
            <hr className="flex-grow border-t-[0.5px] border-[rgba(204, 204, 204, 1)] m-0" />
            <div className="px-[60px] flex items-center justify-center">
              <Image
                src={FooterLogo}
                alt="Logo"
                width={104}
                height={52}
                preview={false}
                style={{ width: 104, height: 52 }}
              />
            </div>
            <hr className="flex-grow border-t-[0.5px] border-[rgba(204, 204, 204, 1)] m-0" />
          </div>
          <div className="mt-[17px] flex flex-wrap lg:justify-center justify-between gap-[50px] px-[18.5px] py-[40px]">
            <div className="flex items-center text-start  lg:max-w-[492px] md:w-[100%]">
              <form className="flex flex-col items-start" action="">
                <Title
                  level={3}
                  className="leading-[130%] !font-bold !text-white !mb-[10px]"
                >
                  {'Залишайся в курсі'}
                </Title>
                <Text className="leading-[150%] font-normal text-white mb-[30px]">
                  {
                    'Будьте першим, хто дізнається про наші спеціальні пропозиції та все, що стосується Velvet Secrets.'
                  }
                </Text>
                <Text className="leading-[150%] font-normal text-white">
                  {'Електронна пошта'}
                </Text>
                <Input
                  className={`max-w-[380px] bg-transparent rounded-[4px] border-[1px] w-[100%] h-[52px] text-white hover:bg-transparent focus:bg-transparent mb-[30px]`}
                />
                <Button
                  className="custom-btn-ChooseYourPerfectFit bg-pink5 text-white font-bold border-0
                h-[60px] w-[194px] text-[16px]"
                >
                  {'Відправити'}
                </Button>
              </form>
            </div>
            <LinksList title={'Головна'} links={mainLinks} />
            <LinksList title={'Клієнтам'} links={clientsLinks} />
            <div className="flex flex-col items-start">
              <Title
                level={3}
                className="!leading-[130%] !text-[16px] !font-bold !text-white !mb-[21px]"
              >
                {'Слідкуйте за нами'}
              </Title>
              <div className="flex justify-center gap-[9px]">
                {socialLinks.map((link) => (
                  <SocialLink {...link} key={link.href} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
