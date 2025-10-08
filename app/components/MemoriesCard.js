import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../config/ThemeContext';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2; // 2 columns with spacing

function MemoriesCard({ category, image, title, subtitle, memoryid, onDeleted, onLike, likes = 0, isLiked = false, isGrid = false }) {
  const { colors } = useTheme();
  const source = typeof image === 'string' ? { uri: image } : image;
  
  if (isGrid) {
    return (
      <TouchableOpacity style={styles.gridCard}>
        <Image source={source} style={styles.gridImage} />
        <View style={styles.gridOverlay}>
          <View style={styles.gridActions}>
            <TouchableOpacity onPress={() => onLike && onLike(memoryid)}>
              <MaterialCommunityIcons 
                name={isLiked ? "heart" : "heart-outline"} 
                size={16} 
                color={isLiked ? colors.errorColor : colors.textWhite} 
              />
            </TouchableOpacity>
            <Text style={styles.gridLikes}>{likes}</Text>
          </View>
          <TouchableOpacity onPress={() => onDeleted && onDeleted(memoryid)}>
            <MaterialCommunityIcons name="delete-outline" size={16} color={colors.errorColor} />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  }
  
  return (
    <Card style={[styles.card, { backgroundColor: colors.surfaceColor }]} elevation={2}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={[styles.avatar, { backgroundColor: colors.surfaceContainer }]} />
          <View>
            <Text variant="titleSmall" style={[styles.username, { color: colors.textPrimary }]}>You</Text>
            <Text variant="bodySmall" style={[styles.timestamp, { color: colors.textSecondary }]}>{subtitle}</Text>
          </View>
        </View>
        <TouchableOpacity>
                    <MaterialCommunityIcons name="dots-vertical" size={20} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
      
      <Image source={source} style={styles.image} />
      
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={() => onLike && onLike(memoryid)}>
            <MaterialCommunityIcons 
              name={isLiked ? "heart" : "heart-outline"} 
              size={24} 
              color={isLiked ? colors.errorColor : colors.textSecondary} 
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionSpacing}>
            <MaterialCommunityIcons name="comment-outline" size={24} color={colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionSpacing}>
            <MaterialCommunityIcons name="share-outline" size={24} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => onDeleted && onDeleted(memoryid)}>
          <MaterialCommunityIcons name="delete-outline" size={24} color={colors.errorColor} />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Text variant="bodyMedium" style={[styles.likes, { color: colors.textPrimary }]}>
          {likes} {likes === 1 ? 'like' : 'likes'}
        </Text>
        <View style={styles.caption}>
          <Text variant="bodyMedium">
            <Text style={[styles.username, { color: colors.textPrimary }]}>{title}</Text>
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text variant="bodySmall" style={[styles.categoryText, { color: colors.textSecondary }]}>#{category}</Text>
        </View>
    </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e5e7eb',
    marginRight: 12,
  },
  username: {
    fontFamily: 'System',
    fontWeight: '600',
    color: '#111827',
    fontSize: 14,
  },
  timestamp: {
    fontFamily: 'System',
    fontWeight: '400',
    color: '#6b7280',
    fontSize: 12,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f3f4f6',
    resizeMode: 'cover',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionSpacing: {
    marginLeft: 16,
  },
  content: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likes: {
    fontWeight: '600',
    marginBottom: 4,
  },
  caption: {
    marginBottom: 8,
  },
  categoryContainer: {
    marginTop: 4,
  },
  categoryText: {
    color: '#6366f1',
    fontWeight: '500',
  },
  // Grid styles
  gridCard: {
    width: cardWidth,
    height: cardWidth,
    marginBottom: 8,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f3f4f6',
    resizeMode: 'cover',
  },
  gridOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: 8,
  },
  gridActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gridLikes: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
});

export default MemoriesCard;