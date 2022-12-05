import {
  Manrope_200ExtraLight,
  Manrope_300Light,
  Manrope_400Regular,
  Manrope_500Medium,
  Manrope_600SemiBold,
  Manrope_700Bold,
  Manrope_800ExtraBold,
} from '@expo-google-fonts/manrope';
import { GreatVibes_400Regular } from '@expo-google-fonts/great-vibes';
import { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { FONTS } from '../styles/fonts';

export function useCachedResources() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          [FONTS.GREAT_VIBES_REGULAR]: GreatVibes_400Regular,
          [FONTS.MANROPE_EXTRA_LIGHT]: Manrope_200ExtraLight,
          [FONTS.MANROPE_LIGHT]: Manrope_300Light,
          [FONTS.MANROPE_REGULAR]: Manrope_400Regular,
          [FONTS.MANROPE_MEDIUM]: Manrope_500Medium,
          [FONTS.MANROPE_SEMI_BOLD]: Manrope_600SemiBold,
          [FONTS.MANROPE_BOLD]: Manrope_700Bold,
          [FONTS.MANROPE_EXTRA_BOLD]: Manrope_800ExtraBold,
        });
      } catch (error) {
        console.log(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return appIsReady;
}
