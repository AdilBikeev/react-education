import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render'
import store from './redux/store'

rerenderEntireTree(store)

serviceWorker.unregister();