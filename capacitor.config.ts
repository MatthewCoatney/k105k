import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ionicthemes.ionic5fullapp',
  appName: 'Ionic6FullAppElite',
  webDir: 'dist/app/browser',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: [
        "google.com",
        "twitter.com",
        "facebook.com",
        "apple.com"
      ]
    },
    CapacitorHttp: {
      enabled: true
    }
  }
};

export default config;
