import React from "react";
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import AppScreen from "../components/AppScreen";
import { Card, Title, Paragraph, Switch, List } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../config/ThemeContext';

function AppSettings(props) {
    const { isDarkMode, toggleDarkMode, colors } = useTheme();
    const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
    const [autoSyncEnabled, setAutoSyncEnabled] = React.useState(true);

    return (
        <AppScreen>
            <ScrollView style={styles.container}>
                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>App Settings</Title>
                        <Paragraph style={[styles.paragraph, { color: colors.textSecondary }]}>
                            Customize your Memoirs experience with these settings.
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>Appearance</Title>
                        <List.Item
                            title="Dark Mode"
                            description={isDarkMode ? "Dark theme enabled" : "Light theme enabled"}
                            titleStyle={{ color: colors.textPrimary }}
                            descriptionStyle={{ color: colors.textSecondary }}
                            left={(props) => <MaterialCommunityIcons name="palette" size={24} color={colors.primaryColor} />}
                            right={() => (
                                <Switch
                                    value={isDarkMode}
                                    onValueChange={toggleDarkMode}
                                    trackColor={{ false: colors.borderColor, true: colors.primaryColor }}
                                    thumbColor={isDarkMode ? colors.textWhite : colors.surfaceSecondary}
                                />
                            )}
                        />
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>Notifications</Title>
                        <List.Item
                            title="Push Notifications"
                            description="Receive notifications for new memories"
                            titleStyle={{ color: colors.textPrimary }}
                            descriptionStyle={{ color: colors.textSecondary }}
                            left={(props) => <MaterialCommunityIcons name="bell-ring" size={24} color={colors.secondaryColor} />}
                            right={() => (
                                <Switch
                                    value={notificationsEnabled}
                                    onValueChange={setNotificationsEnabled}
                                    trackColor={{ false: colors.borderColor, true: colors.secondaryColor }}
                                    thumbColor={notificationsEnabled ? colors.textWhite : colors.surfaceSecondary}
                                />
                            )}
                        />
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>Data & Storage</Title>
                        <List.Item
                            title="Auto Sync"
                            description="Automatically sync memories to cloud"
                            titleStyle={{ color: colors.textPrimary }}
                            descriptionStyle={{ color: colors.textSecondary }}
                            left={(props) => <MaterialCommunityIcons name="cloud-sync-outline" size={24} color={colors.tertiaryColor} />}
                            right={() => (
                                <Switch
                                    value={autoSyncEnabled}
                                    onValueChange={setAutoSyncEnabled}
                                    trackColor={{ false: colors.borderColor, true: colors.tertiaryColor }}
                                    thumbColor={autoSyncEnabled ? colors.textWhite : colors.surfaceSecondary}
                                />
                            )}
                        />
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>About</Title>
                        <List.Item
                            title="App Version"
                            description="1.0.0"
                            titleStyle={{ color: colors.textPrimary }}
                            descriptionStyle={{ color: colors.textSecondary }}
                            left={(props) => <MaterialCommunityIcons name="information" size={24} color={colors.textSecondary} />}
                        />
                        <List.Item
                            title="Privacy Policy"
                            description="View our privacy policy"
                            titleStyle={{ color: colors.textPrimary }}
                            descriptionStyle={{ color: colors.textSecondary }}
                            left={(props) => <MaterialCommunityIcons name="shield-check" size={24} color={colors.textSecondary} />}
                        />
                    </Card.Content>
                </Card>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingHorizontal: 16,
    },
    card: {
        marginBottom: 16,
        elevation: 2,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
    },
});

export default AppSettings;