import { Router as RouterBase, State } from 'router5';
import { DefaultDependencies } from 'router5/dist/types/router';

export interface Router<
  Dependencies extends DefaultDependencies = DefaultDependencies
> extends Omit<RouterBase<Dependencies>, 'getState'> {
  getState(): State | null;
}

export interface RouterContext {
  router: Router;
  getRoute: () => State | null;
  getPreviousRoute: () => State | null;
  isActive: (name?: string, full?: boolean) => boolean;
}

export interface RouteState {
  route: State | null;
  previousRoute: State | null;
}

export interface RouteProps {
  name: string;
  full?: boolean;
}

export interface RouteContext {
  fullName: string;
  // linkPrefix: string;
}
