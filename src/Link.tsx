import { Component, createMemo } from 'solid-js';
import { useRoute } from './hooks/useRoute';
import { useRouter } from './hooks/useRouter';
import { RouteProps } from './types';

type LinkProps = JSX.IntrinsicElements['a'] & Partial<RouteProps>;

export const Link: Component<LinkProps> = (props) => {
  const { router } = useRouter();
  const ctx = useRoute();

  const getName = createMemo<string | null>(
    () => {
      if (props.name) {
        return (ctx && !props.full ? ctx.fullName + '.' : '') + props.name;
      } else if (props.href) {
        const match = router.matchPath(props.href);
        return match ? match.name : null;
      }
      return null;
    },
    undefined,
    true,
  );

  const getProps = createMemo<typeof props>(() => {
    const addProps: Partial<typeof props> = {};
    const name = getName();
    if (name) {
      addProps.onClick = (e) => {
        e.preventDefault();
        if (typeof props.onClick === 'function') {
          props.onClick(e);
        }
        router.navigate(name);
      };
    }

    return { ...props, ...addProps };
  });

  return <a {...getProps()} />;
};
