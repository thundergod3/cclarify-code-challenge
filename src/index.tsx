import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";

import COLORS from "./constants/colors";
import store from "./stores/stores";

import App from "./App";

import "./styles/global.scss";
import "./styles/common.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ConfigProvider
    theme={{
      components: {
        Button: {
          colorPrimary: COLORS.primary,
          algorithm: true,
        },
      },
    }}>
    <Provider store={store}>
      <App />
    </Provider>
  </ConfigProvider>
);
