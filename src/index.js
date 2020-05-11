import * as serviceWorker from './serviceWorker';
import store from './redux/store'
import './index.css';
import renderEntireTree from './render';

renderEntireTree(store)

store.subscribe(renderEntireTree)

serviceWorker.unregister();