module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null, // previously blacklist
        allowlist: null, // previously whitelist
        safe: false,
        allowUndefined: true,
      },
    ],
  ],
};
