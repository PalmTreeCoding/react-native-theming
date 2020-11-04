import { ReactNode } from 'react'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type StaticStyle = ViewStyle | TextStyle | ImageStyle

export type StaticStyles = {
  [key: string]: StaticStyle
}

export type ThemedStyles<Theme = any> = (theme: Theme) => StaticStyles

export type Styles<Theme = any> = StaticStyles | ThemedStyles<Theme>

export type InnerProps<Theme, Styles> = {

  children?: ReactNode

  styles: Styles

  theme: Theme

}
