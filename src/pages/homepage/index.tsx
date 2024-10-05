import { Switch } from "antd";

import { useAppDispatch, useAppSelector } from "src/stores/stores";

import MainLayout from "src/components/layouts/MainLayout";
import WelcomeTitle from "./components/WelcomeTitle";
import GenerateContentForm from "./components/GenerateContentForm";
import { setIsDarkMode } from "src/stores/commonSlice";

const Homepage = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useAppSelector((state) => state.common);

  return (
    <MainLayout>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col gap-72 w-full">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-1 justify-center">
              <span className="dark:text-white">
                {isDarkMode ? "Light" : "Dark"} mode
              </span>
              <Switch
                className="bg-primary"
                checked={isDarkMode}
                onChange={(checked) => dispatch(setIsDarkMode(checked))}
              />
            </div>
            <WelcomeTitle />
          </div>
          <GenerateContentForm />
        </div>
      </div>
    </MainLayout>
  );
};

export default Homepage;
