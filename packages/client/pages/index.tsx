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
    navigation: {
      navigation:{
        links: {title: string, href: string}[]
      }
    },
    slot: {
        components: any[]
    }
}

const Index: NextPage<Props> = (props: Props) => {
  let {
      navigation,
      slot
  } = props;





  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  }
  
  /** Data fixes if not loaded **/
  let defaultNavContent = navigation?.navigation?.links || [ { title: 'Error: No Navigation Slot with content for delivery key "slots/navigation"', href: '/' }]
  const navigationLinks = defaultNavContent;

  let defaultSlotContent = {
    components: [
      {
          description: 'No Page Slot with content for delivery key "slots/homepage-hero"',
          component: 'EditorialBlock',
          title: 'Error loading content'
      }]
    }
    if(slot && slot.components){
      defaultSlotContent = slot;
    }
    const slotContent = defaultSlotContent;


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

        {
            slotContent.components.map(component => {
                let ComponentType = null;

                switch (component.component) {
                    case 'HeroBannerBlock':
                        ComponentType = HeroBannerBlock;
                        break;
                    case 'EditorialBlock':
                        ComponentType = EditorialBlock;
                        break;
                    case 'GalleryBlock':
                        ComponentType = GalleryBlock;
                        break;
                }
                
                return <ComponentType {...component} />;
            })
        }

        <Footer />
      </div>

      <Sidebar links={navigationLinks} open={sidebarOpen} onToggleOpen={handleToggleSidebar} />
    </>
  );
}

Index.getInitialProps = async (context) => {
  const navigation = fetchContent('slots/navigation', context);
  const slot = fetchContent('slots/homepage-hero', context);

  return {
    navigation: await navigation,
    slot: await slot
  };
};

export default Index;