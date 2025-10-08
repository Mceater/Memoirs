import React from "react";
import { Text, StyleSheet, View, ScrollView } from 'react-native';
import AppScreen from "../components/AppScreen";
import { Card, Title, Paragraph, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../config/ThemeContext';

function MoreInfo(props) {
    const { colors } = useTheme();
    
    return (
        <AppScreen>
            <ScrollView 
                style={styles.container}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>About Memoirs</Title>
                        <Paragraph style={[styles.paragraph, { color: colors.textSecondary }]}>
                            Memoirs is your personal memory keeper. Capture, organize, and relive your precious moments with beautiful photos and meaningful stories.
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>Features</Title>
                        <View style={styles.feature}>
                            <MaterialCommunityIcons name="camera-plus" size={20} color={colors.primaryColor} />
                            <Text style={[styles.featureText, { color: colors.textPrimary }]}>Capture memories with photos</Text>
                        </View>
                        <View style={styles.feature}>
                            <MaterialCommunityIcons name="tag-multiple" size={20} color={colors.secondaryColor} />
                            <Text style={[styles.featureText, { color: colors.textPrimary }]}>Organize with custom categories</Text>
                        </View>
                        <View style={styles.feature}>
                            <MaterialCommunityIcons name="calendar-plus" size={20} color={colors.tertiaryColor} />
                            <Text style={[styles.featureText, { color: colors.textPrimary }]}>Add dates and descriptions</Text>
                        </View>
                        <View style={styles.feature}>
                            <MaterialCommunityIcons name="view-grid-outline" size={20} color={colors.primaryColor} />
                            <Text style={[styles.featureText, { color: colors.textPrimary }]}>View in feed or grid layout</Text>
                        </View>
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>How to Use</Title>
                        <Paragraph style={[styles.paragraph, { color: colors.textSecondary }]}>
                            1. Tap the "+" button to add a new memory{'\n'}
                            2. Select a photo from your gallery{'\n'}
                            3. Add a title and description{'\n'}
                            4. Choose or create a category{'\n'}
                            5. Set the date and save!
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]}>
                    <Card.Content>
                        <Title style={[styles.title, { color: colors.textPrimary }]}>Tips</Title>
                        <Paragraph style={[styles.paragraph, { color: colors.textSecondary }]}>
                            • Use descriptive titles for easy searching{'\n'}
                            • Create meaningful categories{'\n'}
                            • Add dates to track your journey{'\n'}
                            • Switch between feed and grid views{'\n'}
                            • Delete memories you no longer need
                        </Paragraph>
                    </Card.Content>
                </Card>
            </ScrollView>
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        paddingTop: 100,
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    card: {
        marginBottom: 16,
        elevation: 2,
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
    feature: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
    },
    featureText: {
        fontSize: 16,
        marginLeft: 12,
    },
});

export default MoreInfo;