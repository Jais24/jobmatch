# JobMatch

Demovideo: https://www.youtube.com/shorts/kx8B6_zpkWE

## Sådan kører du appen

Forudsætninger: Node.js samt appen **Expo Go** på din telefon (eller en emulator).

1. Opret et tomt Expo-projekt:
   ```bash
   npx create-expo-app@latest jobmatch --template blank
   cd jobmatch
   ```
2. Kopiér `App.js` og mappen `src/` fra dette repo ind i projektet (overskriv den eksisterende `App.js`).
3. Installer navigation:
   ```bash
   npx expo install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context
   ```
4. Start appen:
   ```bash
   npx expo start
   ```
5. Scan QR-koden med Expo Go (telefon og computer skal være på samme netværk). Tryk `a` for Android-emulator eller `i` for iOS-simulator.
