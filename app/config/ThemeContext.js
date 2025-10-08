import React, { createContext, useContext, useState } from 'react';
import AppColors from './AppColors';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleDarkMode,
    colors: isDarkMode ? {
      // Dark Mode - Material Design 3 Dark Theme
      primaryColor: '#D0BCFF', // Inverse Primary P-80
      primaryLight: '#6750A4', // Primary P-40
      primaryDark: '#21005D', // Primary P-10
      onPrimary: '#21005D', // On Primary P-10
      onPrimaryContainer: '#E8DEF8', // Primary P-90
      
      secondaryColor: '#CCC2DC', // Secondary S-80
      secondaryLight: '#625B71', // Secondary S-40
      secondaryDark: '#1D192B', // Secondary S-10
      onSecondary: '#1D192B', // On Secondary S-10
      onSecondaryContainer: '#E8DEF8', // Secondary S-90
      
      tertiaryColor: '#EFB8C8', // Tertiary T-80
      tertiaryLight: '#7D5260', // Tertiary T-40
      tertiaryDark: '#31111D', // Tertiary T-10
      onTertiary: '#31111D', // On Tertiary T-10
      onTertiaryContainer: '#FFD8E4', // Tertiary T-90
      
      errorColor: '#F2B8B5', // Error E-80
      errorLight: '#BA1A1A', // Error E-40
      errorDark: '#410002', // Error E-10
      onError: '#410002', // On Error E-10
      onErrorContainer: '#FFDAD6', // Error E-90
      
      // Surface Colors (Dark)
      surfaceDim: '#1C1B1F', // On Surface N-10
      surface: '#1C1B1F', // On Surface N-10
      surfaceBright: '#313033', // Inverse Surface N-20
      surfaceContainerLowest: '#1C1B1F', // On Surface N-10
      surfaceContainerLow: '#313033', // Inverse Surface N-20
      surfaceContainer: '#313033', // Inverse Surface N-20
      surfaceContainerHigh: '#3B383E', // Surface Container High (darker)
      surfaceContainerHighest: '#46424A', // Surface Container Highest (darkest)
      
      // Text Colors (Dark)
      onSurface: '#F4EFF4', // Inverse On Surface N-95
      onSurfaceVariant: '#CAC4D0', // Outline Variant NV-80
      
      // Outline Colors (Dark)
      outline: '#938F99', // Outline Variant NV-80 (adjusted)
      outlineVariant: '#49454F', // On Surface Var. NV-30
      
      // Background Gradients (Dark)
      backgroundGradient: ['#1C1B1F', '#313033'],
      surfaceGradient: ['#1C1B1F', '#313033'],
      
      // Legacy compatibility
      surfaceColor: '#1C1B1F',
      surfaceSecondary: '#313033',
      textPrimary: '#F4EFF4',
      textSecondary: '#CAC4D0',
      textWhite: '#FFFFFF',
      borderColor: '#49454F',
      shadowColor: '#000000',
    } : {
      // Light Mode - Material Design 3 Light Theme
      ...AppColors,
      
      // Legacy compatibility
      surfaceColor: AppColors.surface,
      surfaceSecondary: AppColors.surfaceContainer,
      textPrimary: AppColors.onSurface,
      textSecondary: AppColors.onSurfaceVariant,
      textWhite: AppColors.onPrimary,
      borderColor: AppColors.outline,
      shadowColor: AppColors.shadow,
      
      // Background Gradients (Light)
      backgroundGradient: AppColors.surfaceGradient,
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
