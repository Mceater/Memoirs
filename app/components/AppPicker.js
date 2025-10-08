import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import AppColors from "../config/AppColors";
import AppScreen from "./AppScreen";
import AppPickeritem from "./AppPickeritems";
import { useTheme } from '../config/ThemeContext';

function AppPicker({ data, icon, placeholder, onSelectItem, selectedItem, allowCustom = false, onCustomSubmit, customPlaceholder = "Type a category" }) {
  const { colors } = useTheme();
  const [modalVisible, setmodalVisible] = useState(false);
  const [customValue, setCustomValue] = useState("");
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setmodalVisible(true)}>
        <View style={[styles.container, { backgroundColor: colors.surfaceColor, borderColor: colors.borderColor }]}>
          {icon && <MaterialCommunityIcons name={icon} size={30} color={colors.textSecondary} />}
          <AppText style={[styles.text, { color: colors.textPrimary }]}> {selectedItem?.label || placeholder} </AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} color={colors.textSecondary} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <AppScreen>
          <Button title="Close" onPress={() => setmodalVisible(false)} />
          {allowCustom && (
            <View style={styles.customRow}>
              <TextInput
                placeholder={customPlaceholder}
                style={styles.input}
                value={customValue}
                onChangeText={setCustomValue}
              />
              <Button
                title="Add"
                onPress={() => {
                  const newLabel = customValue.trim();
                  if (!newLabel) return;
                  setCustomValue("");
                  const newItem = {
                    label: newLabel,
                    value: Date.now(),
                    icon: "tag",
                    backgroundColor: AppColors.secondaryColor,
                  };
                  onSelectItem && onSelectItem(newItem);
                  onCustomSubmit && onCustomSubmit(newItem);
                  setmodalVisible(false);
                }}
              />
            </View>
          )}
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickeritem
                onPress={() => {
                  setmodalVisible(false);
                  onSelectItem(item);
                }}
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
              />
            )}
            ItemSeparatorComponent={() => <View style={styles.seperator} />}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    borderWidth: 1,
    elevation: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
  customRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 12,
    marginRight: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  seperator: {
    width: "80%",
    height: 1,
    backgroundColor: "#e0e0e0",
    alignSelf: "center",
    marginVertical: 8,
  },
});
export default AppPicker;
