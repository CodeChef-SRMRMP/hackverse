import Header from "./components/Header";
import { ConfigProvider, theme } from "antd";
import { useTheme } from "./context/useTheme";

const App = () => {
  const { darkMode } = useTheme();
  return (
    <ConfigProvider
      theme={{
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <div className="bg-white dark:bg-black">
        <Header />
      </div>
    </ConfigProvider>
  );
};

export default App;
