import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

export class Screen {
  static readonly WIDTH = width;
  static readonly HEIGHT = height;
  static readonly HORIZONAL_CENTER = width / 2;
  static readonly HEADING_FONT_SIZE = width / 15;
  static readonly SUB_HEADING_FONT_SIZE = this.HEADING_FONT_SIZE * 0.55;
  static readonly PARAGRAPH_FONT_SIZE = this.SUB_HEADING_FONT_SIZE * 0.9;

  public static readonly FLOATING_BUTTON_SIZE = this.WIDTH / 6.5;
  public static readonly FLOATING_BUTTON_BORDER_RADIUS =
    this.FLOATING_BUTTON_SIZE / 2;
  public static readonly FLOATING_BUTTON_HORIZONTAL_POSITION =
    this.HORIZONAL_CENTER - this.FLOATING_BUTTON_BORDER_RADIUS;
  public static readonly EXPLOADER_RANGE =
    Math.max(this.WIDTH, this.HEIGHT) / this.FLOATING_BUTTON_BORDER_RADIUS;
  public static readonly EXPLOADER_TRANSITION_DURATION =
    this.EXPLOADER_RANGE * 30;
}
