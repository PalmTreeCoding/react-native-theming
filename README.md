# React Native Theming
> Easy to use and setup theming and styling for React Native

## Installation
```shell
$ npm install --save @palmtreecoding/react-native-theming
$ yarn add @palmtreecoding/react-native-theming
```

## Examples
Wrapping your application with a theme
```typescript jsx
import React from 'react'
import { ThemeProvider } from '@palmtreecoding/react-native-theming'

export const MyApp = () => (
  <ThemeProvider theme={{ myBackgroundColor: 'pink' }}>
    ...
  </ThemeProvider>
)

export default MyApp
```

### Hook
Using the `createUseStyles` hook
```typescript jsx
import React from 'react'
import { View } from 'react-native'
import { createUseStyles } from '@palmtreecoding/react-native-theming'

const useStyles = createUseStyles((theme) => ({
  
  container: {
    backgroundColor: theme.myBackgroundColor
  }

})) 

export const MyComponent = () => {
  const [styles] = useStyles()
  
  return (
    <View styles={styles.container}>
      ...
    </View>
  )
}
```

### HOC
Using the `withStyles` decorator
```typescript jsx
import React from 'react'
import { View } from 'react-native'
import { createUseStyles } from '@palmtreecoding/react-native-theming'

const componentStyles = (theme) => ({
  
  container: {
    backgroundColor: theme.myBackgroundColor
  }

})

export const MyComponent = ({ styles }) => {
  return (
    <View styles={styles.container}>
      ...
    </View>
  )
}

export default withStyles(componentStyles)(MyComponent)
```

## Development
If you'd like to contribute to this project, all you need to do is clone
this project and run:

```shell
$ yarn install
$ yarn build
$ yarn build:watch // To recompile files on file change
```

## [License](https://github.com/palmtreecoding/react-native-theming/blob/master/LICENSE)
React Native Theming is [MIT licensed](./LICENSE).

## Collaboration
If you have questions or [issues](https://github.com/palmtreecoding/react-native-theming/issues), please [open an issue](https://github.com/palmtreecoding/react-native-theming/issues/new)!
