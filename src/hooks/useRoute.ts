import { useContext } from 'solid-js';
import { routeContext } from '../context';

export const useRoute = () => useContext(routeContext);
