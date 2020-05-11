import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import './index.css';
import renderEntireTree from './render';

renderEntireTree(store)

store.subscribe(() => {
    renderEntireTree(store);
})

serviceWorker.unregister();