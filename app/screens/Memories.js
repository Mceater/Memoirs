import React from "react";
import AppScreen from "../components/AppScreen";
import MemoriesCard from "../components/MemoriesCard";
import DataManager from "../config/DataManager";
import AppPicker from "../components/AppPicker";

import { StyleSheet, View, FlatList } from "react-native";

const getMemories = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getMemories(user);
};

function Memories(props) {
  const memory = getMemories();
  console.log(memory);

  return (
    <AppScreen style={styles.container}>

      <FlatList
        data={memory}
        keyExtractor={(memory) => memory.memoryid.toString()}
        renderItem={({ item }) => (
          <MemoriesCard
            title={item.title}
            subtitle={item.subtitle}
            image={item.image}
            category={item.category}
          />
        )}
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
});

export default Memories;
