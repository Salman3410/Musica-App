import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import RoutineCard from "./routineCard";
import NotFound from "../moves/notFound";

export default function RoutineList() {
  const [routines, setRoutines] = useState([]);
  return (
    <ScrollView
      style={styles.scrollStyle}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {routines.length > 0 ? (
        routines.map((routine, index) => (
          <RoutineCard key={index} data={routine} />
        ))
      ) : (
        <NotFound
          title="No Routines Found"
          tagline="This is not made yet!"
          buttonText="Build your Routine"
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    width: "100%",
  },
});
