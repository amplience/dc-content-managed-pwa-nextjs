import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import PromoBanner from '../components/PromoBanner';
import UserActions from '../components/UserActions';
import Navigation from '../components/Navigation';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';
import EditorialBlock from '../components/EditorialBlock';
import HeroBannerBlock from '../components/HeroBannerBlock';
import GalleryBlock from '../components/GalleryBlock';
import Sidebar from '../components/Sidebar';

import { fetchContent } from '../utils/fetchContent';

interface Props {
}

const Index: NextPage<Props> = (props: Props) => {
  let {
  } = props;

  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }

  const navigationLinks = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Men',
      href: '/men'
    },
    {
      title: 'Women',
      href: '/women'
    },
    {
      title: 'Lookbook',
      href: '/lookbook'
    },
    {
      title: 'Blog',
      href: '/blog'
    }
  ];

  return (
    <>
      <Head>
        <title>ANYA FINN</title>
      </Head>
      
      <div>
        <PromoBanner>ORDER BEFORE 1PM FOR NEXT DAY DELIVERY</PromoBanner>

        <Header actions={<UserActions />}
          search={<SearchBox />}
          navigation={(
            <Navigation links={navigationLinks}>
            </Navigation>
          )}
          onToggleSidebar={handleToggleSidebar}>
        </Header>

        <HeroBannerBlock 
          image="https://i1.adis.ws/i/ampliencelabs/greg-rivers-YeP1MUZDSsE-unsplash"
          title="Home Comforts"
          description="Spruce up your space with our wide selection of home furnishings offering next day delivery."
          callToAction="Shop All"
          callToActionHref="/category/beauty" />

        <EditorialBlock
          title="Personal Shopping"
          description="For informed advice and inspiration, book an appointment with one of our Personal Shopping Advisors." />

        <GalleryBlock
          title="Highlights"
          items={[
            
            {
              title: "Shoes Edit",
              image: "https://i1.adis.ws/i/ampliencelabs/mohammad-metri-E-0ON3VGrBc-unsplash",
              callToAction: "SHOP NOW",
              callToActionHref: "/"
            },
            {
              title: "Wellness Shop",
              image: "https://i1.adis.ws/i/ampliencelabs/deanna-alys-6LBBOwkPzyQ-unsplash",
              callToAction: "SHOP NOW",
              callToActionHref: "/"
            },
            {
              title: "Summer Styles",
              image: "https://i1.adis.ws/i/ampliencelabs/aziz-acharki-ufkBk8aNsjg-unsplash",
              callToAction: "SHOP NOW",
              callToActionHref: "/"
            }
          ]} />

        <Footer />
      </div>

      <Sidebar links={navigationLinks} open={sidebarOpen} onToggleOpen={handleToggleSidebar} />
    </>
  );
}

Index.getInitialProps = async (context) => {
  return {};
};

export default Index;