const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    resolver: {
        extraNodeModules: {
            constants: path.resolve(__dirname, 'node_modules/constants-browserify'),
            'node:crypto': path.resolve(__dirname, 'node_modules/react-native-crypto'),
            stream: path.resolve(__dirname, 'node_modules/stream-browserify'),
            events: path.resolve(__dirname, 'node_modules/events'),        },
    },
};

module.exports = mergeConfig(defaultConfig, config);
