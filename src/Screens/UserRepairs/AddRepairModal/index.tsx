import { memo, useRef } from "react";
import type { TextInput } from "react-native";
import { Text, TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ExploaderModal } from "Components/ExploaderModal";
import { Input } from "Components/Input";
import { Modals, useModals } from "State/Modals";
import { CoreTheme } from "Themes/Core";
import type { Propless } from "Types/React";
import { Styles } from "./Styles";

export const AddRepairModal = memo(function AddRepairModal(_: Propless) {
  const title = useRef<TextInput>(null);
  const description = useRef<TextInput>(null);
  const open = useModals(state => state.addIssue);

  return (
    <ExploaderModal
      visible={open}
      close={Modals.closeAddIssue}
      theme={CoreTheme.REPAIR_COLORS}>
      <Text style={Styles.title}>File an Issue</Text>
      <Text style={Styles.subTitle}>
        The issues you file will notify a staff member
      </Text>
      <Input
        gradient={CoreTheme.REPAIR_COLORS}
        nodeRef={title}
        placeholder="Title"
        style={Styles.titleInput}
      />
      <Input
        gradient={CoreTheme.REPAIR_COLORS}
        multiline
        nodeRef={description}
        placeholder="Description"
        style={Styles.descriptionInput}
      />
      <TouchableOpacity style={Styles.touchable}>
        <LinearGradient
          end={{ x: 1, y: 0 }}
          start={{ x: 0, y: 0 }}
          colors={CoreTheme.REPAIR_COLORS}
          style={Styles.touchableInner}>
          <Text style={Styles.buttonText}>Create</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ExploaderModal>
  );
});
