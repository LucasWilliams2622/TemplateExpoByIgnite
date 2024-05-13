import React from "react"
import { StyleProp, TextStyle, ViewStyle } from "react-native"

export type AppModalProps = {
  modalStyle?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  backgroundColor?: string
  borderRadius?: number
  child?: React.ReactNode
  childTop?: React.ReactNode

  width?: any
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  onBackdropPress?: any
  onBackButtonPress?: any

  title?: string
  titleStyle?: StyleProp<TextStyle>
  content?: string
  boldContent?: string[]
  contentStyle?: StyleProp<TextStyle>
  typeOption?:
    | "confirm"
    | "success"
    | "error"
    | "normal"
    | "successConfirm"
    | "errorConfirm"
    | "none"
  allowBackdropPress?: boolean

  btnContainerStyle?: StyleProp<ViewStyle>
  textBtnLeft?: string
  textBtnRight?: string
  textColorLeft?: string
  textColorRight?: string
  bgBtnLeft?: string
  bgBtnRight?: string
  btnBorderRadius?: number
  onPressLeft?: any
  onPressRight?: any
  disableRight?: boolean
  hasClose?: boolean
  animationIn?:
    | "bounce"
    | "bounceIn"
    | "bounceInDown"
    | "bounceInLeft"
    | "bounceInRight"
    | "bounceInUp"
    | "bounceOut"
    | "bounceOutDown"
    | "bounceOutLeft"
    | "bounceOutRight"
    | "bounceOutUp"
    | "fadeIn"
    | "fadeOut"
    | "flash"
    | "shake"
    | "jello"
    | "flash"
    | "tada"
    | "rotate"
    | "pulse"
    | "wobble"
    | "zoomIn"
    | "zoomOut"
  animationInTiming?: number
  animationOut?:
    | "bounce"
    | "bounceIn"
    | "bounceInDown"
    | "bounceInLeft"
    | "bounceInRight"
    | "bounceInUp"
    | "bounceOut"
    | "bounceOutDown"
    | "bounceOutLeft"
    | "bounceOutRight"
    | "bounceOutUp"
    | "fadeIn"
    | "fadeOut"
    | "flash"
    | "shake"
    | "jello"
    | "flash"
    | "tada"
    | "rotate"
    | "pulse"
    | "wobble"
    | "zoomIn"
    | "zoomOut"
  animationOutTiming?: number
}
