import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'theming'

import { Styles, ThemedStyles } from './interfaces'

export const createUseStyles = <Theme = any>(styles: Styles<Theme>) => {
  const areDynamicStyles = typeof styles === 'function'

  return function useStyles() {
    const theme = useTheme<Theme>()

    return React.useMemo(() => {
      return StyleSheet.create(
        areDynamicStyles
          ? (styles as ThemedStyles<Theme>)(theme)
          : styles
      )
    }, [theme])
  }
}
