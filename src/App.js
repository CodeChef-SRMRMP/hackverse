import Header from './components/Header';
import { Oval } from 'react-loader-spinner';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from './context/useTheme';
import SponsorsCard from './components/SponsorsCard';
import Landing from './components/Landing';
import CommunityPartnerCard from './components/CommunityPartnerCard';
import WhySponsorUs from './components/WhySponsorUs';
import SessionLayout from './components/SessionLayout';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import PrizeSection from './components/PrizeSection';
import Tracks from './components/Tracks';
import Sponsors from './components/Sponsors';
import FaqSection from './components/FaqSection';
// import OrganizersInfo from './components/OrganizersInfo';

const App = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const { darkMode } = useTheme();

  const { id } = useParams();

  const sectionRefs = {
    headerRef: useRef(null),
    sessions: useRef(null),
  };

  useEffect(() => {
    if (id === 'sessions') {
      sectionRefs?.sessions?.current?.scrollIntoView({ behavior: 'smooth' });
    }

    if (id === undefined) {
      sectionRefs?.headerRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id, sectionRefs?.headerRef, sectionRefs?.sessions]);

  const [loading, setLoading] = useState(false);

  window.addEventListener('load', (event) => {
    setLoading(false);
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Oval
          strokeColor="grey"
          secondaryColor="#fff"
          strokeWidth="5"
          color="red"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}>
      <Header headerRef={sectionRefs?.headerRef} />
      <div className=" min-h-screen w-full">
        <Landing />
        <SponsorsCard />
        <WhySponsorUs />
        <Tracks />
        <Sponsors />
        <PrizeSection />
        <SessionLayout sessionRef={sectionRefs.sessions} />
        <CommunityPartnerCard />
        <FaqSection />
        {/* <OrganizersInfo /> */}
      </div>
      <Footer />
    </ConfigProvider>
  );
};

export default App;
