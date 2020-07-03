import { Component } from 'solid-js';
import { routeContext } from './context';
import { RouteProps } from './types';
import { useRoute } from './hooks/useRoute';

export const RouteProvider: Component<RouteProps> = (props) => {
  let fullName = props.name;
  const ctx = useRoute();
  if (!props.full && ctx) {
    fullName = ctx.fullName + '.' + fullName;
  }
  return (
    <routeContext.Provider value={{ fullName }}>
      {props.children}
    </routeContext.Provider>
  );
};
