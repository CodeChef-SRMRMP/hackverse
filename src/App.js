import Header from './components/Header';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from './context/useTheme';
import SponsorsCard from './components/SponsorsCard';
import Landing from './components/Landing';
import CommunityPartnerCard from './components/CommunityPartnerCard';
import WhySponsorUs from './components/WhySponsorUs';
import SessionLayout from './components/SessionLayout';
import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const App = () => {
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
  }, [id]);

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
        <SessionLayout sessionRef={sectionRefs.sessions} />
        <CommunityPartnerCard />
      </div>
    </ConfigProvider>
  );
};

export default App;
