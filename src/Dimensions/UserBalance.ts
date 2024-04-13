import { Screen } from "./Screen";

export class UserBalance {
  public static readonly GRAPH_MAX_WIDTH = 300;
  public static readonly GRAPH_MARGIN_TOP = 30;
  public static readonly GRAPH_MARGIN_BOTTOM = 40;
  public static readonly GRAPH_DIMENSIONS = Screen.WIDTH * 0.65;
  public static readonly GRAPH_SPACE =
    Math.min(Screen.WIDTH * 0.65, 300) +
    this.GRAPH_MARGIN_TOP +
    this.GRAPH_MARGIN_BOTTOM;
}
