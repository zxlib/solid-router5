import { useContext } from 'solid-js';
import { routerContext } from '../context';

export const useRouter = () => useContext(routerContext);
