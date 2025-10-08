import React from "react";
import AppScreen from "../components/AppScreen";
import MemoriesCard from "../components/MemoriesCard";
import DataManager from "../config/DataManager";
import { useIsFocused } from '@react-navigation/native';

import { StyleSheet, View, FlatList } from "react-native";
import { FAB, SegmentedButtons } from 'react-native-paper';
import { FlatGrid } from 'react-native-super-grid';

const getMemories = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserID();
  return commonData.getMemories(user);
};

function Memories(props) {
  const isFocused = useIsFocused();
  const [memory, setMemory] = React.useState(getMemories());
  const [viewMode, setViewMode] = React.useState('feed');

  React.useEffect(() => {
    if (isFocused) {
      setMemory(getMemories());
    }
  }, [isFocused]);
  
  const renderMemory = ({ item }) => (
    <MemoriesCard
      memoryid={item.memoryid}
      title={item.title}
      subtitle={item.subtitle}
      image={item.image}
      category={item.category}
      isGrid={viewMode === 'grid'}
      onLike={(memoryId) => {
        console.log('Liked memory:', memoryId);
      }}
      onDeleted={(memoryId) => {
        let commonData = DataManager.getInstance();
        commonData.deleteMemory(memoryId);
        setMemory(getMemories());
      }}
    />
  );
  
  return (
    <AppScreen style={styles.container}>
      <View style={styles.header}>
        <SegmentedButtons
          value={viewMode}
          onValueChange={setViewMode}
          buttons={[
                    { value: 'feed', label: 'Feed', icon: 'view-list-outline' },
                    { value: 'grid', label: 'Grid', icon: 'view-grid-outline' },
          ]}
          style={styles.segmentedButtons}
        />
      </View>

      {viewMode === 'feed' ? (
        <FlatList
          data={memory}
          keyExtractor={(memory) => memory.memoryid.toString()}
          renderItem={renderMemory}
          contentContainerStyle={styles.listContent}
        />
      ) : (
        <FlatGrid
          itemDimension={130}
          data={memory}
          style={styles.grid}
          spacing={8}
          renderItem={renderMemory}
          contentContainerStyle={styles.gridContent}
        />
      )}
      
      <FAB
        icon="plus-circle"
        style={styles.fab}
        onPress={() => props.navigation.navigate('Collections')}
        label="Add Memory"
        accessibilityLabel="Add new memory"
        accessibilityRole="button"
      />
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingTop: 100,
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
  segmentedButtons: {
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 120, // Space for FAB and navbar
  },
  grid: {
    flex: 1,
  },
  gridContent: {
    paddingBottom: 120, // Space for FAB and navbar
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 100, // Moved up to avoid navbar overlap
  },
});

export default Memories;
