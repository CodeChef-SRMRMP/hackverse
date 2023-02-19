import Header from "./components/Header";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "./context/useTheme";
import SponsorsCard from "./components/SponsorsCard";
import Landing from "./components/Landing";

const App = () => {
  const { darkMode } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Header />
      <div className="bg-gray-200 dark:bg-black min-h-screen w-full">
        <Landing />
        <SponsorsCard />
      </div>
    </ConfigProvider>
  );
};

export default App;
