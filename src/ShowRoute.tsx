import { Component, Show } from 'solid-js';
import { useRouter } from './hooks/useRouter';
import { RouteProvider } from './RouteProvider';
import { RouteProps } from './types';

export const ShowRoute: Component<RouteProps> = (props) => {
  const { isActive } = useRouter();
  return (
    <Show when={isActive(props.name, props.full)}>
      <RouteProvider {...props} />
    </Show>
  );
};
