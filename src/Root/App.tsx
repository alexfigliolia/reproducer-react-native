import { Component } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NativeRouter, Route, Routes } from "react-router-native";
import { Greeting } from "Components/Greeting";
import { LazyComponent } from "Components/LazyComponent";
import { Navigation } from "Components/Navigation";
import { Redirect } from "Components/Redirect";
import { USER_HOME, USER_PAYMENTS, USER_REPAIRS } from "Routing/UserRoutes";
import { Styles } from "./Styles";

export class App extends Component {
  private UserHome = LazyComponent(() => require("Screens/UserHome").UserHome);
  private UserRepairs = LazyComponent(
    () => require("Screens/UserRepairs").UserRepairs,
  );
  private UserPayments = LazyComponent(
    () => require("Screens/UserPayments").UserPayments,
  );

  render() {
    return (
      <SafeAreaProvider>
        <NativeRouter>
          <Greeting />
          <View style={Styles.container}>
            <Routes>
              <Route path={USER_HOME} Component={this.UserHome} />
              <Route path={USER_REPAIRS} Component={this.UserRepairs} />
              <Route
                path={`${USER_PAYMENTS}/*`}
                Component={this.UserPayments}
              />
              <Route path="*" element={<Redirect to={USER_REPAIRS} />} />
            </Routes>
          </View>
          <Navigation />
        </NativeRouter>
      </SafeAreaProvider>
    );
  }
}
