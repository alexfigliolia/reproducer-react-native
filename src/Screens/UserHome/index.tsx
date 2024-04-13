import { memo } from "react";
import { View } from "react-native";
import { PageScrollView } from "Components/PageScrollView";
import type { Propless } from "Types/React";
import { Announcements } from "./Announcements";
import { Status } from "./Status";
import { Styles } from "./Styles";

export const UserHome = memo(
  function UserHome(_: Propless) {
    return (
      <PageScrollView>
        <View style={Styles.container}>
          <View style={Styles.inner}>
            <Status />
            <Announcements />
          </View>
        </View>
      </PageScrollView>
    );
  },
  () => true,
);
