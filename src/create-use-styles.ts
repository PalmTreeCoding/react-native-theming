import React from 'react'
import { StyleSheet } from 'react-native'
import { useTheme } from 'theming'

import { Styles, ThemedStyles } from './utils/interfaces'

export function createUseStyles<Theme = any>(styles: Styles<Theme>) {
  const areDynamicStyles = typeof styles === 'function'

  return function useStyles(): [StyleSheet.NamedStyles<any>, Theme] {
    const theme = useTheme<Theme>()

    // Generate and cache the styles
    const generateStyles = React.useMemo(() => {
      return StyleSheet.create(
        areDynamicStyles
          ? (styles as ThemedStyles<Theme>)(theme)
          : styles
      ) as StyleSheet.NamedStyles<any>
    }, [theme])

    // Return generated styles and used theme
    return [generateStyles, theme]
  }
}
