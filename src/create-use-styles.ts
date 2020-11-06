import React from 'react'
import { useTheme } from 'theming'

import { Styles, NamedStyles } from './utils/interfaces'
import { createStyles } from './utils/create-styles'

export function createUseStyles<Theme = any>(styles: Styles<Theme>) {
  return function useStyles(): [NamedStyles, Theme] {
    const theme = useTheme<Theme>()

    // Generate and cache the styles
    const generateStyles = React.useMemo(() => (
      createStyles(styles, theme)
    ), [theme])

    // Return generated styles and used theme
    return [generateStyles, theme]
  }
}
