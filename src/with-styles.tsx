import React from 'react'

import { createUseStyles } from './create-use-styles'
import { InnerProps, Styles } from './utils/interfaces'

export function withStyles<Theme>(styles: Styles<Theme>) {
  const useStyles = createUseStyles(styles)

  return function WithStyles<Props = InnerProps<Theme, typeof styles>>(
    InnerComponent: React.FC<Props>
  ) {
    const [generatedStyles, theme] = useStyles()

    return (props: Props) => (
      <InnerComponent
        styles={generatedStyles}
        theme={theme}
        {...props} />
    )
  }
}
