import Header from './components/Header';
import { ConfigProvider, theme } from 'antd';
import { useTheme } from './context/useTheme';
import SponsorsCard from './components/SponsorsCard';
import Landing from './components/Landing';
import CommunityPartnerCard from './components/CommunityPartnerCard';

const App = () => {
  const { darkMode } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}>
      <Header />
      <div className=" min-h-screen w-full">
        <Landing />

        <SponsorsCard />
        <CommunityPartnerCard />
      </div>
    </ConfigProvider>
  );
};

export default App;
