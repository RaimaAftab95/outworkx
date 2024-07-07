import { setupCache } from 'axios-cache-interceptor';
import Axios from 'axios';

const instance = Axios.create();
const axios = setupCache(instance);

export default axios;
