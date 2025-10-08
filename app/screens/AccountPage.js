import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import AppItems from "../components/AppItems";
import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import { Card, Title, Paragraph } from 'react-native-paper';
import DataManager from "../config/DataManager";
import { useIsFocused } from '@react-navigation/native';
import { useTheme } from '../config/ThemeContext';

function AccountPage({ navigation, route }) {
  const isFocused = useIsFocused();
  const { colors } = useTheme();
  const dataManager = DataManager.getInstance();
  const [userMemories, setUserMemories] = React.useState([]);

  React.useEffect(() => {
    if (isFocused) {
      const memories = dataManager.getMemories(dataManager.getUserID());
      setUserMemories(memories);
    }
  }, [isFocused]);
  
  return (
    <AppScreen>
      <ScrollView style={styles.container}>
        <View style={[styles.profile, { backgroundColor: colors.surfaceColor, borderColor: colors.primaryColor }]}>
          <AppItems
            image={route.params.paramImage}
            title={route.params.paramName}
            subtitle={route.params.paramEmail}
            onPress={() => navigation.navigate('EditProfile', {
              paramName: route.params.paramName,
              paramEmail: route.params.paramEmail,
              paramImage: route.params.paramImage,
            })}
          />
        </View>

        <Card style={[styles.statsCard, { backgroundColor: colors.surfaceColor, borderColor: colors.borderColor }]}>
          <Card.Content>
            <Title style={[styles.statsTitle, { color: colors.textPrimary }]}>Your Stats</Title>
            <View style={styles.statsRow}>
              <View style={[styles.statItem, { backgroundColor: colors.surfaceSecondary }]}>
                <AppIcon
                  name="image-multiple"
                  size={40}
                  backgroundColor={colors.primaryColor}
                />
                <Paragraph style={[styles.statText, { color: colors.textPrimary }]}>{userMemories.length} Memories</Paragraph>
              </View>
            </View>
          </Card.Content>
        </Card>

        <View style={[styles.subcontent, { backgroundColor: colors.surfaceColor, borderColor: colors.borderColor }]}>
          <AppItems
            title="My Memories"
            IconComponent={
                <AppIcon
                  name="image-multiple"
                  size={45}
                  backgroundColor={colors.primaryColor}
                  backgroundOpacity={0.7}
                />
            }
            navigation={navigation}
            onPress={() => navigation.navigate("MemoriesTab")}
          />
        </View>

        <View style={[styles.subcontent, { backgroundColor: colors.surfaceColor, borderColor: colors.borderColor }]}>
          <AppItems
            title="App Settings"
            IconComponent={
                <AppIcon
                  name="cog-outline"
                  size={45}
                  backgroundColor={colors.secondaryColor}
                />
            }
            navigation={navigation}
            onPress={() => navigation.navigate("AppSettings")}
          />
        </View>

        <View style={[styles.subcontent, { backgroundColor: colors.surfaceColor, borderColor: colors.borderColor }]}>
          <AppItems
            title="Help & Support"
            IconComponent={
                <AppIcon
                  name="help-circle-outline"
                  size={45}
                  backgroundColor={colors.tertiaryColor}
                />
            }
            navigation={navigation}
            onPress={() => navigation.navigate("HelpSupport")}
          />
        </View>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    marginTop: 100,
    height: 90,
    justifyContent: "center",
    margin: 10,
    borderRadius: 25,
    borderWidth: 3,
    borderStyle: 'dashed',
    elevation: 4,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  statsCard: {
    margin: 10,
    marginTop: 20,
    borderRadius: 20,
    elevation: 4,
    borderWidth: 1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
    borderRadius: 15,
    padding: 15,
    marginHorizontal: 5,
  },
  statText: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 8,
    textAlign: 'center',
  },
  subcontent: {
    marginTop: 15,
    height: 80,
    justifyContent: "center",
    paddingLeft: 15,
    padding: 15,
    margin: 10,
    borderRadius: 25,
    elevation: 3,
    borderWidth: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
});

export default AccountPage;