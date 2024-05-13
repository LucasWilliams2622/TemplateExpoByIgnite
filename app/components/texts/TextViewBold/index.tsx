import { StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native"
import React from "react"
import { appStyle } from "../../../theme/appStyle"
import { colors } from "app/theme"

type Props = {
  boldTexts?: string[]
  text: string
  colorBold?: string
  boldStyle?: StyleProp<TextStyle>
  viewStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  textAlign?: "auto" | "left" | "right" | "center" | "justify"
}

const _TextViewBold: React.FC<Props> = ({
  boldTexts = [" "],
  colorBold = colors.primary,
  text,
  boldStyle,
  textStyle,
  viewStyle,
  textAlign = "center",
}) => {
  const getTextWithBoldAndUpper = (text: string, boldTexts: string[]) => {
    const regex = new RegExp(`(${boldTexts?.join("|")})`, "gi")
    const parts = text?.split(regex)
    return parts?.map((part, index) => {
      const isBoldAndUpper = boldTexts?.includes(part)
      return isBoldAndUpper ? (
        <Text
          key={index}
          style={StyleSheet.flatten([appStyle.text14SemiBold, { color: colorBold }, boldStyle])}
        >
          {part}
        </Text>
      ) : (
        <Text style={[textStyle, { color: colors.textNormal }]} key={index}>
          {part}
        </Text>
      )
    })
  }

  return (
    <View style={StyleSheet.flatten([_styles.container, viewStyle])}>
      <Text style={[appStyle.text14Medium, textStyle, { textAlign: textAlign }]}>
        {getTextWithBoldAndUpper(text, boldTexts)}
      </Text>
    </View>
  )
}

const _styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
})

export const TextViewBold = React.memo(_TextViewBold)
