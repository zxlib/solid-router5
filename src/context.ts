import { createContext } from 'solid-js';
import { RouteContext, RouterContext } from './types';

export const routerContext = createContext<RouterContext>();
export const routeContext = createContext<RouteContext>();
