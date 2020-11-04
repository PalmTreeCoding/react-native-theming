import React from 'react'
import { View } from 'react-native'
import { render } from '@testing-library/react-native'

import { createUseStyles, ThemeProvider } from '../index'

describe('withStyles', () => {

  it('should add static styles to the component', () => {
    const useStyles = createUseStyles({
      container: {
        backgroundColor: 'pink'
      }
    })

    const FakeComponent: React.FC = () => {
      const [styles] = useStyles()

      return (
        <View style={styles.container} />
      )
    }

    // @ts-ignore
    const { toJSON } = render(
      <ThemeProvider theme={{ customBackgroundColor: 'green' }}>
        <FakeComponent />
      </ThemeProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

  it('should add themed styles to the component', () => {
    const useStyles = createUseStyles((theme) => ({
      container: {
        backgroundColor: theme.customBackgroundColor
      }
    }))

    const FakeComponent: React.FC = () => {
      const [styles] = useStyles()

      return (
        <View style={styles.container} />
      )
    }

    // @ts-ignore
    const { toJSON } = render(
      <ThemeProvider theme={{ customBackgroundColor: 'green' }}>
        <FakeComponent />
      </ThemeProvider>
    )

    expect(toJSON()).toMatchSnapshot()
  })

})
