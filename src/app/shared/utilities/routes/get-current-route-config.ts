import { ActivatedRoute, Route } from '@angular/router';

export function getCurrentRouteConfig(route: ActivatedRoute): Route | null {
  const child = route.firstChild as ActivatedRoute;
  if (child?.firstChild) {
    return getCurrentRouteConfig(child?.firstChild);
  } else {
    return child?.routeConfig;
  }
}
