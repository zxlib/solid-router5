# Router for solid js

## Installation

```bash
npm install @zxlib/solid-router5
```

## Usage

```tsx
import { Link, RouterProvider, ShowRoute } from '@zxlib/solid-router5';
import createRouter, { Route } from 'router5';
import browserPlugin from 'router5-plugin-browser';
import { Component } from 'solid-js';

export const routes: Route[] = [
  { name: 'index', path: '/' },
  { name: 'route1', path: '/route1' },
  { name: 'route2', path: '/route2' },
  {
    name: 'children',
    path: '/children',
    children: [
      { name: 'index', path: '/' },
      { name: 'route1', path: '/route1' },
      { name: 'route2', path: '/route2' },
    ],
  },
];

export const App: Component = () => {
  const router = createRouter(routes);
  router.usePlugin(browserPlugin());
  router.start();

  return (
    <RouterProvider router={router}>
      <div class="nav">
        <Link name="index">Index</Link>
        <Link name="route1">Route1</Link>
        <Link name="route2">Route2</Link>
        <Link name="children">Children</Link>
      </div>
      <div class="content">
        <ShowRoute name="index">Index content</ShowRoute>
        <ShowRoute name="route1">Route1 content</ShowRoute>
        <ShowRoute name="route2">Route2 content</ShowRoute>
        <ShowRoute name="children">
          {/* the names inside will be auto-prefixed to `children.<NAME>` */}
          <div class="nav">
            <Link name="index">Index</Link>
            <Link name="route1">Route1</Link>
            <Link name="route2">Route2</Link>
            <Link full name="index">
              Root index
            </Link>
          </div>
          <div class="content">
            <ShowRoute name="index">Index content</ShowRoute>
            <ShowRoute name="route1">Route1 content</ShowRoute>
            <ShowRoute name="route2">Route2 content</ShowRoute>
          </div>
        </ShowRoute>
      </div>
    </RouterProvider>
  );
};
```

### Link example

Using with bulma's nav item:

```tsx
import { useRouter, Link } from '@zxlib/solid-router5';

const NavLink: typeof Link = (props) => (
  <Link
    {...(props as any)}
    classList={{
      'navbar-item': true,
      'is-tab': true,
      'is-active': useRouter().isActive(props.name, props.full),
    }}
  />
);
```
