import { Component, createSignal, onCleanup } from 'solid-js';
import { routerContext } from './context';
import { RouteState, Router } from './types';
import { useRoute } from './hooks/useRoute';

export const RouterProvider: Component<{ router: Router }> = (props) => {
  const [getRouteState, setRouteState] = createSignal<RouteState>({
    route: props.router.getState(),
    previousRoute: null,
  });

  if (typeof window !== 'undefined') {
    const unsubscribe = props.router.subscribe(setRouteState) as () => void;
    onCleanup(unsubscribe);
  }

  const getRoute = () => getRouteState().route;
  const getPreviousRoute = () => getRouteState().previousRoute;

  const isActive = (name?: string, full = false) => {
    const route = getRoute();
    const ctx = useRoute();
    if (!name || !route) {
      return false;
    } else if (!full && ctx) {
      name = ctx.fullName + '.' + name;
    }
    return (
      name === route.name ||
      route.name.substring(0, name.length + 1) === name + '.'
    );
  };

  return (
    <routerContext.Provider
      value={{
        router: props.router,
        getRoute,
        getPreviousRoute,
        isActive,
      }}
    >
      {props.children}
    </routerContext.Provider>
  );
};
