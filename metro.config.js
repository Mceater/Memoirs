const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Disable static rendering for web builds
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

module.exports = config;
