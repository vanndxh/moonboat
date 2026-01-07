import { PropsWithChildren } from "react";
import "taro-ui/dist/style/components/icon.scss";
import "taro-ui/dist/style/index.scss";

function App({ children }: PropsWithChildren<any>) {
  return children;
}

export default App;
