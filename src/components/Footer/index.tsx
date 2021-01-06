import React from 'react';

import logo from '@assets/images/logo.png';
import twitter from '@assets/icons/twitter.png';
import instagram from '@assets/icons/instagram.png';
import facebook from '@assets/icons/facebook.png';

import playStoreBanner from '@assets/images/play_store_banner.png';
import appleStoreBanner from '@assets/images/apple_store_banner.png';

import { Container, Column } from './styles';

const aboutLinks = [
  {
    title: 'Me ajuda, Zé!',
    link: 'https://zedelivery.freshdesk.com/support/home',
  },
  {
    title: 'Trabalhe conosco',
    link: 'https://bit.ly/374UOmX',
  },
  {
    title: 'Pagamento na Entrega',
    link:
      'https://zedelivery.freshdesk.com/support/solutions/articles/60000601483-posso-fazer-meu-pagamento-online-no-app-',
  },
  {
    title: 'Cidades atendidas',
    link: 'https://www.ze.delivery/cidades-atendidas',
  },
];

const partnerships = [
  {
    title: 'Quero ser parceiro',
    link: 'https://www.ze.delivery/cadastro-parceiro',
  },
];

const Footer: React.FC = () => {
  return (
    <Container>
      <section>
        <Column>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <a href="https://twitter.com/ZeDelivery">
                <img src={twitter} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/zedeliverydebebidas">
                <img src={facebook} alt="twitter icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zedelivery/?hl=pt">
                <img src={instagram} alt="twitter icon" />
              </a>
            </li>
          </ul>
        </Column>
        <Column>
          <h2>Sobre o Zé Delivery</h2>
          {aboutLinks.map((link) => (
            <a
              key={link.title}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </Column>
        <Column>
          <h2>Parcerias</h2>
          {partnerships.map((link) => (
            <a key={link.title} href={link.link}>
              {link.title}
            </a>
          ))}
        </Column>
        <Column>
          <h2>Já baixou o aplicativo?</h2>
          <a
            href="https://go.onelink.me/app/dae6576"
            target="_blank"
            rel="noreferrer"
          >
            <img src={playStoreBanner} alt="banner play store" />
          </a>
          <a
            href="https://go.onelink.me/app/19cf41d1"
            target="_blank"
            rel="noreferrer"
          >
            <img src={appleStoreBanner} alt="banner apple store" />
          </a>
        </Column>
      </section>
    </Container>
  );
};

export default Footer;
