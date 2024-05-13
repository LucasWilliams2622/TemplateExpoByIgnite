import { StyleProp, TextStyle, ViewStyle } from "react-native"
import { DatePickerProps } from "react-native-date-picker"

export type AppDateTimePickerProps = DatePickerProps & {
  containerStyle?: StyleProp<ViewStyle>
  mainStyle?: StyleProp<ViewStyle>
  borderRadius?: number
  backgroundColor?: any
  paddingVertical?: number
  paddingHorizontal?: number
  width?: any
  height?: any
  disable?: boolean

  title: string
  titleStyle?: StyleProp<TextStyle>

  typePicker?: "date" | "time" | "dateTime"
  marginTop?: number
  isRequired?: boolean
  selectedDateText: string
  setSelectedDateText: any
  maxDate?: any
  minDate?: any
  onChangeDate?: (date: Date) => void
}
