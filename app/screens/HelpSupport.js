import React from "react";
import { Text, StyleSheet, View, ScrollView, Linking } from 'react-native';
import AppScreen from "../components/AppScreen";
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function HelpSupport(props) {
    const handleEmailSupport = () => {
        Linking.openURL('mailto:support@memoirs.app?subject=Help Request');
    };

    const handleFAQ = () => {
        // In a real app, this would open a FAQ page
        alert('FAQ section coming soon!');
    };

    return (
        <AppScreen>
            <ScrollView style={styles.container}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Help & Support</Title>
                        <Paragraph style={styles.paragraph}>
                            Need help? We're here to assist you with any questions or issues.
                        </Paragraph>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Get Help</Title>
                        <View style={styles.helpItem}>
                            <MaterialCommunityIcons name="email-outline" size={24} color="#6366f1" />
                            <View style={styles.helpContent}>
                                <Text style={styles.helpTitle}>Contact Support</Text>
                                <Text style={styles.helpDescription}>Email us for personalized assistance</Text>
                                <Button 
                                    mode="outlined" 
                                    onPress={handleEmailSupport}
                                    style={styles.helpButton}
                                >
                                    Send Email
                                </Button>
                            </View>
                        </View>
                        
                        <View style={styles.helpItem}>
                            <MaterialCommunityIcons name="help-circle-outline" size={24} color="#6366f1" />
                            <View style={styles.helpContent}>
                                <Text style={styles.helpTitle}>Frequently Asked Questions</Text>
                                <Text style={styles.helpDescription}>Find answers to common questions</Text>
                                <Button 
                                    mode="outlined" 
                                    onPress={handleFAQ}
                                    style={styles.helpButton}
                                >
                                    View FAQ
                                </Button>
                            </View>
                        </View>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Common Issues</Title>
                        <View style={styles.issueItem}>
                            <MaterialCommunityIcons name="image-off-outline" size={20} color="#ef4444" />
                            <Text style={styles.issueText}>Can't upload images? Check your internet connection and try again.</Text>
                        </View>
                        <View style={styles.issueItem}>
                            <MaterialCommunityIcons name="account-question-outline" size={20} color="#ef4444" />
                            <Text style={styles.issueText}>Login issues? Make sure you're using the correct email and password.</Text>
                        </View>
                        <View style={styles.issueItem}>
                            <MaterialCommunityIcons name="delete-off-outline" size={20} color="#ef4444" />
                            <Text style={styles.issueText}>Can't delete memories? Try refreshing the app and try again.</Text>
                        </View>
                    </Card.Content>
                </Card>

                <Card style={styles.card}>
                    <Card.Content>
                        <Title style={styles.title}>Feedback</Title>
                        <Paragraph style={styles.paragraph}>
                            We value your feedback! Help us improve Memoirs by sharing your thoughts and suggestions.
                        </Paragraph>
                        <Button 
                            mode="contained" 
                            onPress={() => Linking.openURL('mailto:feedback@memoirs.app?subject=App Feedback')}
                            style={styles.feedbackButton}
                        >
                            Send Feedback
                        </Button>
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
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 8,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333333',
    },
    helpItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 20,
    },
    helpContent: {
        flex: 1,
        marginLeft: 12,
    },
    helpTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1a1a1a',
        marginBottom: 4,
    },
    helpDescription: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
    },
    helpButton: {
        alignSelf: 'flex-start',
    },
    issueItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    issueText: {
        flex: 1,
        fontSize: 14,
        color: '#333333',
        marginLeft: 8,
        lineHeight: 20,
    },
    feedbackButton: {
        marginTop: 12,
        borderRadius: 20,
    },
});

export default HelpSupport;
