import { memo } from "react";
import { Exploader } from "Components/Exploader";
import { useModals } from "State/Modals";
import { CoreTheme } from "Themes/Core";
import type { Propless } from "Types/React";

export const AddRepairExploader = memo(
  function AddRepairExploader(_: Propless) {
    const visible = useModals(state => state.addIssue);
    return <Exploader visible={visible} colors={CoreTheme.REPAIR_COLORS} />;
  },
  () => true,
);
