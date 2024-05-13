import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import React, { useState } from "react"
import { AppDateTimePickerProps } from "./type"
import { Calendar, LocaleConfig } from "react-native-calendars"
import { AntDesign, Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons"
import { DateData, Direction } from "react-native-calendars/src/types"

import moment from "moment"
import { appStyle } from "@app/theme/appStyle"

import DatePicker, { DatePickerProps } from "react-native-date-picker"
import { Button } from "app/components/Button"
import { colors } from "app/theme"
import AppModal from "app/components/modals/AppModals"

LocaleConfig.locales.vn = {
  monthNames: [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ],
  monthNamesShort: [
    "Th 1",
    "Th 2",
    "Th 3",
    "Th 4",
    "Th 5",
    "Th 6",
    "Th 7",
    "Th 8",
    "Th 9",
    "Th 10",
    "Th 11",
    "Th 12",
  ],
  dayNames: ["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"],
  dayNamesShort: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
  today: "Hôm nay",
}
LocaleConfig.defaultLocale = "vn"
const currentDate = new Date()
const futureDate = new Date(
  currentDate.getFullYear() + 5,
  currentDate.getMonth(),
  currentDate.getDate(),
)
const AppDateTimePicker = ({
  title = "Ngày sinh",
  titleStyle,
  typePicker = "date",
  marginTop,
  containerStyle,
  mainStyle,
  borderRadius = 10,
  backgroundColor = colors.bgComponent,
  paddingVertical = Platform.OS === "ios" ? 14 : 12,
  paddingHorizontal = 16,
  width = "100%",
  height,
  disable = false,
  isRequired = true,
  selectedDateText,
  setSelectedDateText,
  minDate = currentDate.toISOString(),
  maxDate = futureDate.toDateString(),
  confirmText = "Xác nhận",
  cancelText = "Huỷ",
  ...props
}: AppDateTimePickerProps) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [showPickDate, setShowPickDate] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1)
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  // const [selectedDateText, setSelectedDateText] = useState("")
  const [date, setDate] = useState<Date>(new Date())

  const handleDateSelect = (date: SelectedDateCalendar) => {
    setSelectedDate(date.dateString)
  }

  const renderHeader = () => {
    return (
      <TouchableOpacity
        style={[
          appStyle.rowBtw,
          {
            flex: 1,
            backgroundColor: colors.bgComponent,
            borderRadius: 8,
            paddingVertical: 12,
            paddingHorizontal: 16,
          },
        ]}
        onPress={() => setShowPickDate(true)}
      >
        <Text style={appStyle.text16SemiBold}>
          Tháng {currentMonth}/{currentYear}
        </Text>
        <Entypo name="chevron-right" size={20} color={colors.text} />
      </TouchableOpacity>
    )
  }

  const renderArrow = (direction: Direction) => {
    return (
      <>
        {direction === "left" ? (
          <AntDesign name="left" size={20} color="black" />
        ) : (
          <AntDesign name="right" size={20} color="black" />
        )}
      </>
    )
  }

  const onMonthChange = (month: DateData) => {
    setCurrentMonth(month.month)
    setCurrentYear(month.year)
  }
  const handleConfirm = async () => {
    try {
      console.log(selectedDate)
      setSelectedDateText(selectedDate)
      setShowCalendar(false)
    } catch (error: any) {
      console.log(error)
    }
  }
  const handleCancel = () => {
    setShowPickDate(false)
  }
  const handleConfirmDate = (date: DatePickerProps) => {
    console.log(
      "🚀 ~ handleConfirmDate ~ date:",
      moment(date).format("YYYY-MM-DD"),
      moment(date).format("MM"),
      moment(date).format("YYYY"),
      "|",
      selectedDate,
      currentMonth,
      currentYear,
    )
    // setSelectedDate(moment(date).format("YYYY-MM-DD"))
    // setCurrentMonth(moment(date).format("MM"))
    // setCurrentYear(moment(date).format("YYYY"))
    // setShowPickDate(false)
  }

  return (
    <View style={[{ marginTop }, mainStyle]}>
      <Text style={[appStyle.text12Medium, styles.title, titleStyle]}>
        {title}
        <Text style={[appStyle.text14SemiBold, { color: colors.red }]}>
          {isRequired ? " *" : ""}
        </Text>
      </Text>
      <TouchableOpacity
        onPress={() => setShowCalendar(true)}
        style={[
          styles.boxInput,
          {
            width,
            height,
            backgroundColor: disable ? "#F5F5F5" : backgroundColor,
            borderRadius,
            paddingVertical,
            paddingHorizontal,
          },
          containerStyle,
        ]}
      >
        <Text style={appStyle.text14Medium}>
          {selectedDateText
            ? moment(selectedDateText).format("DD/MM/YYYY")
            : moment().format("DD/MM/YYYY")}
        </Text>
        {typePicker === "time" ? (
          <MaterialCommunityIcons name="clock-time-two-outline" size={20} color={colors.text} />
        ) : (
          <Ionicons name="calendar-outline" size={20} color={colors.text} />
        )}
      </TouchableOpacity>
      {/* Modal select date */}
      <AppModal
        animationIn="zoomIn"
        animationOut="zoomOut"
        borderRadius={8}
        visible={showCalendar}
        setVisible={setShowCalendar}
        containerStyle={{ padding: 0, paddingTop: 10, paddingBottom: 16 }}
        child={
          <View style={{}}>
            <Calendar
              style={{}}
              headerStyle={{}}
              theme={{
                todayTextColor: colors.primary,
                textDayFontFamily: "Medium",
                "stylesheet.calendar.header": {
                  marginHorizontal: 0,
                  dayTextAtIndex0: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                  dayTextAtIndex1: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                  dayTextAtIndex2: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                  dayTextAtIndex3: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                  dayTextAtIndex4: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                  dayTextAtIndex5: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                  dayTextAtIndex6: {
                    color: colors.primary,
                    fontFamily: "Medium",
                  },
                },
              }}
              firstDay={1}
              hideArrows
              arrowsHitSlop={null}
              enableSwipeMonths={true}
              minDate={minDate}
              maxDate={maxDate}
              onDayPress={handleDateSelect}
              onMonthChange={onMonthChange}
              markedDates={{
                [selectedDate]: {
                  selected: true,
                  selectedColor: colors.primary,
                },
              }}
              renderArrow={renderArrow}
              renderHeader={renderHeader}
            />

            <View style={[appStyle.rowBtw, { marginTop: 16, paddingHorizontal: 16 }]}>
              <Button
                style={{ width: "48%" }}
                backgroundColor={colors.successColor2}
                borderColor={colors.successColor2}
                title="Hủy"
                textColor={colors.successColor}
                onPress={() => {
                  setShowCalendar(false)
                }}
              />
              <Button style={{ width: "48%" }} title="Xác nhận" onPress={handleConfirm} />
            </View>
          </View>
        }
      />

      <DatePicker
        mode={"date"}
        modal
        // onDateChange={handleDateChange}
        open={showPickDate}
        onConfirm={handleConfirmDate}
        onCancel={handleCancel}
        confirmText={confirmText}
        cancelText={cancelText}
        title={title}
        {...props}
        date={date}
        locale={"vn"}
        theme={"auto"}
        dividerColor={colors.primary}
        buttonColor={colors.primary}
      />
    </View>
  )
}

export default AppDateTimePicker

const styles = StyleSheet.create({
  boxInput: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    marginBottom: 4,
  },
})
