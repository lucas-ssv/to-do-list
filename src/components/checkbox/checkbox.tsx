import { useRef } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from "./checkbox-styles"

type Props = {
  checked: boolean
  onCheck: () => void
}

export const CheckBox: React.FC<Props> = ({ checked, onCheck }: Props) => {
  return (
    <TouchableOpacity onPress={onCheck}>
      <View style={[styles.checkbox, checked && styles.activedCheckbox]}>
        {checked && <Feather name="check" size={10} color="#F2F2F2" />}
      </View>
    </TouchableOpacity>
  )
}