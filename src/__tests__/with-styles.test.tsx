import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { ThemeProvider, withStyles } from '../'

describe('withStyles', () => {

  const FakeComponent: React.FC = ({ styles }) => (
    <View style={styles.container} />
  )

  it('should add static styles to the component', () => {
    const styles = {
      container: {
        backgroundColor: 'pink'
      }
    }

    const Component = withStyles(styles)(FakeComponent)

    // @ts-ignore
    const { toJSON } = render(
      <ThemeProvider theme={{ customBackgroundColor: 'green' }}>
        <Component />
      </ThemeProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should add themed styles to the component', () => {
    const styles = (theme) => ({
      container: {
        backgroundColor: theme.customBackgroundColor
      }
    })

    const Component = withStyles(styles)(FakeComponent)

    // @ts-ignore
    const { toJSON } = render(
      <ThemeProvider theme={{ customBackgroundColor: 'green' }}>
        <Component />
      </ThemeProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

})
