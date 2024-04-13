import { HomeFill, HomeStroke } from "Icons/Home";
import { MoneyFill, MoneyStroke } from "Icons/Money";
import { NotificationsFill, NotificationsStroke } from "Icons/Notifications";
import { RepairFill, RepairStroke } from "Icons/Repair";
import { SettingsFill, SettingsStroke } from "Icons/Settings";
import { CoreTheme } from "Themes/Core";
import { RouteConfig } from "./RouteConfig";

export const USER_HOME = "/user-home";
export const USER_REPAIRS = "/user-repairs";
export const USER_PAYMENTS = "/user-payments";
export const USER_PAYMENT_METHODS = "/user-payments/payment-methods";
export const USER_SETTINGS = "/user-settings";
export const USER_ALERTS = "/user-alerts";

export const UserRoutes = new RouteConfig("user-home", {
  "user-home": {
    name: "Home",
    route: USER_HOME,
    theme: CoreTheme.HOME_COLORS,
    icon: HomeStroke,
    activeIcon: HomeFill,
  },
  "user-repairs": {
    name: "Repairs",
    route: USER_REPAIRS,
    theme: CoreTheme.REPAIR_COLORS,
    icon: RepairStroke,
    activeIcon: RepairFill,
  },
  "user-payments": {
    name: "Payments",
    route: USER_PAYMENTS,
    theme: CoreTheme.PAYMENT_COLORS,
    icon: MoneyStroke,
    activeIcon: MoneyFill,
  },
  "user-settings": {
    name: "Settings",
    route: USER_SETTINGS,
    theme: CoreTheme.SETTINGS_COLORS,
    icon: SettingsStroke,
    activeIcon: SettingsFill,
  },
  "user-alerts": {
    name: "Alerts",
    route: USER_ALERTS,
    theme: CoreTheme.ALERT_COLORS,
    icon: NotificationsStroke,
    activeIcon: NotificationsFill,
  },
});
