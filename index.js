import {AppRegistry} from 'react-native';
import App from './src/core/App';
import {name as appName} from './app.json';
import { store } from "./src/core/Store";
import { Provider } from "react-redux";


const Wrap = ()=>{
  return(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => Wrap );
