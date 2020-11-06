import { ReactNode } from 'react'
import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native'

export type StaticStyle = ViewStyle | TextStyle | ImageStyle

export type StaticStyles = {
  [key: string]: StaticStyle
}

export type ThemedStyles<Theme = any> = (theme: Theme) => StaticStyles

export type Styles<Theme = any> = StaticStyles | ThemedStyles<Theme>

export type InnerProps<Theme> = {

  children?: ReactNode

  styles: NamedStyles

  theme: Theme

}

export type NamedStyles = { [key: string]: StyleSheet.NamedStyles<any> }
