import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type StaticStyle = ViewStyle | TextStyle | ImageStyle

export type StaticStyles = {
  [key: string]: StaticStyle
}

export type ThemedStyles<Theme> = (theme: Theme) => StaticStyle

export type Styles<Theme> = ThemedStyles<Theme> | StaticStyles
