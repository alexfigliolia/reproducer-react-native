import { memo } from "react";
import { View } from "react-native";
import { FloatingGradientButton } from "Components/FloatingGradientButton";
import { PageScrollView } from "Components/PageScrollView";
import { useUnmount } from "Hooks/useUnmount";
import { Plus } from "Icons/Plus";
import { Modals } from "State/Modals";
import { CoreTheme } from "Themes/Core";
import type { Propless } from "Types/React";
import { AddRepairExploader } from "./AddRepairExploader";
import { AddRepairModal } from "./AddRepairModal";
import { RepairList } from "./RepairList";
import { RepairProgress } from "./RepairProgress";
import { Styles } from "./Styles";

export const UserRepairs = memo(
  function UserRepairs(_: Propless) {
    useUnmount(() => {
      Modals.closeAddIssue();
    });

    return (
      <View style={Styles.container}>
        <PageScrollView>
          <View style={Styles.content}>
            <RepairProgress />
            <RepairList />
          </View>
        </PageScrollView>
        <FloatingGradientButton
          onPress={Modals.openAddIssue}
          colors={CoreTheme.REPAIR_COLORS}>
          <Plus stroke="#fff" />
        </FloatingGradientButton>
        <AddRepairModal />
        <AddRepairExploader />
      </View>
    );
  },
  () => true,
);
