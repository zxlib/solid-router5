import createRouterBase, { Options, Route, RouteNode, State } from 'router5';
import { createSignal } from 'solid-js';
import { Router } from './types';

export function createRouter<
  Dependencies extends Record<string, any> = Record<string, any>
>(
  routes?: Route<Dependencies>[] | RouteNode,
  options?: Partial<Options>,
  dependencies?: Dependencies,
): Router<Dependencies> {
  const router = createRouterBase(routes, options, dependencies) as Router<
    Dependencies
  >;

  const [getState, setState] = createSignal<State | null>(router.getState());
  router.setState = setState;
  router.getState = getState;

  return router;
}
