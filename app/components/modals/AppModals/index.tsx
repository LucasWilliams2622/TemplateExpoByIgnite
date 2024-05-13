/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React from "react"
import Modal from "react-native-modal"
import { AppModalProps } from "./type"
import { color } from "@app/theme"
import { appStyle } from "@app/theme/appStyle"
import { AntDesign } from "@expo/vector-icons"
import { TextViewBold } from "app/components/texts/TextViewBold"
const BACKDROP_COLOR = "#3A3A3C"
const AppModal = ({
  modalStyle,
  containerStyle,
  backgroundColor = "white",
  borderRadius = 14,
  child,
  childTop,
  visible,
  setVisible,
  animationIn = "fadeIn",
  animationInTiming = 300,
  animationOut = "fadeOut",
  animationOutTiming = 300,
  width = "100%",
  onBackdropPress,
  onBackButtonPress,

  typeOption = "none",
  title,
  titleStyle,
  content,
  boldContent,
  contentStyle,

  onPressLeft,
  onPressRight,
  btnContainerStyle,
  disableRight = false,
  allowBackdropPress = true,
  hasClose = false,
  textBtnLeft,
  textBtnRight,
  bgBtnLeft,
  bgBtnRight,
  textColorLeft,
  textColorRight,
}: AppModalProps) => {
  const typeOptionConfigs = {
    confirm: {
      textBtnLeft: "Hủy",
      textBtnRight: "Đồng ý",
      bgBtnLeft: color.third,
      bgBtnRight: color.primary,
      btnBorderRadius: 6,
      textColorLeft: color.primary,
      textColorRight: color.white,
    },
    successConfirm: {
      textBtnLeft: "Hủy",
      textBtnRight: "Đồng ý",
      bgBtnLeft: color.third,
      bgBtnRight: color.primary,
      btnBorderRadius: 6,
      textColorLeft: color.primary,
      textColorRight: color.white,
    },
    errorConfirm: {
      textBtnLeft: "Hủy",
      textBtnRight: "Đồng ý",
      bgBtnLeft: color.third,
      bgBtnRight: color.primary,
      btnBorderRadius: 6,
      textColorLeft: color.primary,
      textColorRight: color.white,
    },
    nomal: {
      textBtnRight: "Đồng ý",
      btnBorderRadius: 6,
      textColorLeft: color.primary,
      textColorRight: color.white,
    },
    success: {
      textButton: "Đồng ý",
      btnBorderRadius: 6,
      textColorLeft: color.primary,
      textColorRight: color.white,
    },
    none: {},
  }

  const typeConfig = typeOptionConfigs[typeOption] || typeOptionConfigs.none

  const {
    textBtnLeft: defaultTextBtnLeft,
    textBtnRight: defaultTextBtnRight,
    bgBtnLeft: defaultBgBtnLeft,
    bgBtnRight: defaultBgBtnRight,
    btnBorderRadius,
    textColorLeft: defaultColorTxtLeft,
    textColorRight: defaultColorTxtRight,
  } = typeConfig

  const finalTextBtnLeft = textBtnLeft !== undefined ? textBtnLeft : defaultTextBtnLeft
  const finalTextBtnRight = textBtnRight !== undefined ? textBtnRight : defaultTextBtnRight
  const finalBgBtnLeft = bgBtnLeft !== undefined ? bgBtnLeft : defaultBgBtnLeft
  const finalBgBtnRight = bgBtnRight !== undefined ? bgBtnRight : defaultBgBtnRight

  const finalColorTxtLeft = textColorLeft !== undefined ? textColorLeft : defaultColorTxtLeft
  const finalColorTxtRight = textColorRight !== undefined ? textColorRight : defaultColorTxtRight

  const backdropPress = () => {
    ;(onBackdropPress ?? handleClose)()
    setVisible(!visible)
  }

  const handlePressLeft = () => {
    ;(onPressLeft ?? handleClose)()
    setVisible(!visible)
  }
  const handleClose = () => {
    setVisible(!visible)
  }

  return (
    <Modal
      onBackdropPress={() => {
        if (allowBackdropPress) {
          ;(onBackdropPress ?? backdropPress)()
        }
      }}
      onBackButtonPress={() => {
        ;(onBackdropPress ?? backdropPress)()
      }}
      // avoidKeyboard
      isVisible={visible}
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      coverScreen
      backdropOpacity={0.6}
      backdropColor={BACKDROP_COLOR}
      style={modalStyle}
    >
      <View
        style={[
          styles.container,
          {
            width,
            borderRadius,
            backgroundColor,
            height: "auto",
            alignItems: "center",
          },
          containerStyle,
        ]}
      >
        {childTop}
        {title && (
          <View
            style={[
              appStyle.rowBtw,
              {
                marginBottom: 12,
                marginTop: 8,
                justifyContent: hasClose ? "space-between" : "center",
              },
            ]}
          >
            {hasClose && <View style={{ width: 24 }} />}
            <Text style={[appStyle.text16Bold, , titleStyle]}>{title}</Text>
            {hasClose && (
              <TouchableOpacity style={{ alignSelf: "flex-end" }} onPress={() => handleClose()}>
                <AntDesign name="close" size={24} color="black" />
              </TouchableOpacity>
            )}
          </View>
        )}

        {content && (
          <TextViewBold boldTexts={boldContent} text={content} textStyle={contentStyle} />
        )}

        {child}
        {typeOption === "confirm" ||
        typeOption === "errorConfirm" ||
        typeOption === "successConfirm" ? (
          <View style={[appStyle.rowBtw, styles.boxButton, btnContainerStyle]}>
            <AppButton
              title={finalTextBtnLeft}
              onPress={handlePressLeft}
              width={"48%"}
              backgroundColor={finalBgBtnLeft}
              borderColor={finalBgBtnLeft}
              textColor={finalColorTxtLeft}
              borderRadius={btnBorderRadius}
              noShadow
            />
            <AppButton
              title={finalTextBtnRight}
              onPress={onPressRight}
              width={"48%"}
              backgroundColor={finalBgBtnRight}
              borderColor={finalBgBtnRight}
              textColor={finalColorTxtRight}
              borderRadius={btnBorderRadius}
              disabled={disableRight}
              noShadow
            />
          </View>
        ) : (
          <></>
        )}

        {(typeOption === "success" || typeOption === "error" || typeOption === "normal") && (
          <AppButton
            containerStyle={styles.boxButton}
            title={finalTextBtnRight}
            onPress={onPressRight}
            backgroundColor={bgBtnRight}
            borderColor={bgBtnRight}
            textColor={textColorRight}
            borderRadius={btnBorderRadius}
            disabled={disableRight}
          />
        )}
      </View>
    </Modal>
  )
}

export default AppModal

const styles = StyleSheet.create({
  boxButton: {
    marginTop: 24,
  },
  container: {
    alignItems: "flex-start",
    alignSelf: "center",
    height: "auto",
    justifyContent: "space-between",
    padding: 16,
  },
})
