import { memo } from "react";
import { View } from "react-native";
import { Heading } from "Components/Heading";
import { HorizontalBarProgress } from "Components/HorizontalBarProgress";
import { ListItemCard } from "Components/ListItemCard";
import { useRepairs } from "State/Repairs";
import { Dates } from "Tools/Dates";
import type { Propless } from "Types/React";
import { Controller } from "./Controller";
import { Styles } from "./Styles";

export const RepairList = memo(
  function RepairList(_: Propless) {
    const repairs = useRepairs(state => state.repairs);
    return (
      <View style={Styles.container}>
        <Heading style={Styles.heading} text="Upcoming Repairs" />
        {repairs.map(({ title, description, date, progress, status }, i) => {
          return (
            <ListItemCard
              key={i}
              title={title}
              description={description}
              date={Dates.format(new Date(date))}>
              <HorizontalBarProgress
                progress={progress}
                progressBar={width => Controller.renderBar(width, status)}
              />
            </ListItemCard>
          );
        })}
      </View>
    );
  },
  () => true,
);
