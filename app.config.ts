import {ExpoConfig, ConfigContext} from 'expo/config';

export default ({config}: ConfigContext): ExpoConfig => {
  config.android!.googleServicesFile = process.env.GOOGLE_SERVICES_JSON;
  config.ios!.googleServicesFile = process.env.GOOGLE_SERVICES_PLIST;

  return {
    ...config,
    name: 'cleaning-app',
    slug: 'cleaning-app',
  };
};
