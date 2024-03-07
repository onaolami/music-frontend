import { Provider } from "react-redux";
import RootNavigation from "./navigation";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
