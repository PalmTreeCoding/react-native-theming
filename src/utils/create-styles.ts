import { StyleSheet } from 'react-native'

import { NamedStyles, Styles, ThemedStyles } from './interfaces'

export function createStyles<Theme = any>(styles: Styles<Theme>, theme: Theme) {
  const areDynamicStyles = typeof styles === 'function'

  return StyleSheet.create(
    areDynamicStyles
      ? (styles as ThemedStyles<Theme>)(theme)
      : styles
  ) as NamedStyles
}

