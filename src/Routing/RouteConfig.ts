import type { IRoute } from "./types";

export class RouteConfig<
  T extends Record<string, IRoute> = Record<string, IRoute>,
> {
  public readonly map: T;
  public defaultRoute: Extract<keyof T, string>;
  constructor(defaultRoute: Extract<keyof T, string>, map: T) {
    this.map = map;
    this.defaultRoute = defaultRoute;
  }

  public iterate<U>(callback: (route: IRoute, index: number) => U) {
    const routes = this.list;
    return routes.map(callback);
  }

  public matchPath(path: string) {
    const tokens = path.split("/");
    for (const token of tokens) {
      if (!token) {
        continue;
      }
      if (this.isRoute(token)) {
        return this.map[token];
      }
    }
    return this.map[this.defaultRoute];
  }

  private isRoute(path: string): path is Extract<keyof T, string> {
    return path in this.map;
  }

  public get list() {
    return Object.values(this.map);
  }
}
