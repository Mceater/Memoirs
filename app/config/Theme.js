import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';

export const LightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#6366f1', // Indigo
    primaryContainer: '#e0e7ff',
    secondary: '#ec4899', // Pink
    secondaryContainer: '#fce7f3',
    tertiary: '#10b981', // Emerald
    tertiaryContainer: '#d1fae5',
    surface: '#ffffff',
    surfaceVariant: '#f8fafc',
    background: '#ffffff',
    error: '#ef4444',
    errorContainer: '#fef2f2',
    onPrimary: '#ffffff',
    onSecondary: '#ffffff',
    onTertiary: '#ffffff',
    onSurface: '#1f2937',
    onBackground: '#1f2937',
    onError: '#ffffff',
    outline: '#d1d5db',
    shadow: '#000000',
  },
  roundness: 16,
};

export const DarkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#818cf8',
    primaryContainer: '#3730a3',
    secondary: '#f472b6',
    secondaryContainer: '#be185d',
    tertiary: '#34d399',
    tertiaryContainer: '#047857',
    surface: '#111827',
    surfaceVariant: '#1f2937',
    background: '#0f172a',
    error: '#f87171',
    errorContainer: '#7f1d1d',
    onPrimary: '#000000',
    onSecondary: '#000000',
    onTertiary: '#000000',
    onSurface: '#f9fafb',
    onBackground: '#f9fafb',
    onError: '#000000',
    outline: '#374151',
    shadow: '#000000',
  },
  roundness: 16,
};
