import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'photo-gallery-final',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: 'b76dc647',
      channel: 'development',
      autoUpdateMethod: 'background',
      maxVersions: 2
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
