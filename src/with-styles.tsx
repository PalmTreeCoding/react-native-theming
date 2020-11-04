import React from 'react'

import { createUseStyles } from './create-use-styles'
import { InnerProps, Styles } from './utils/interfaces'

export function withStyles<Theme = any>(styles: Styles<Theme>) {
  return function <Props = InnerProps<Theme, typeof styles>>(
    InnerComponent: React.FC<Props>
  ): React.FC<Props> {
    const useStyles = createUseStyles(styles)

    return function WithStyles(props: Props) {
      const [styles, theme] = useStyles()

      return (
        <InnerComponent
          styles={styles}
          theme={theme}
          {...props} />
      )
    }
  }
}
