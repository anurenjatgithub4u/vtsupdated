import { StyleSheet ,Text, View } from 'react-native'
import React, { Component, useState } from 'react'
import DateTimePicker from '@react-native-community/datetimepicker'
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDatePicker =() => {


    const [date, setDate] = useState(null);

    const [showPicker, setShowPicker] = useState(false);

const handleDateChange = (event ,selectedDate) => {

    if(event.type === 'set'){

      const currentDate = selectedDate  ||  date
      console.log("currentDate" , currentDate)
      setDate(currentDate)
    }
    setShowPicker(false)
} 
    return (
      <View>

        <TouchableOpacity onPress={() => setShowPicker(true)}   style={styles.touch}>


          <Text  style={styles.text}> Open Date Picker </Text>



        </TouchableOpacity>

        {
          showPicker && (

            <DateTimePicker
            mode='date'
            value= {date || new Date()}
            onChange={handleDateChange}
            />
          )
        }
    
        
      </View>
    )
  
}

export default CustomDatePicker
const styles = StyleSheet.create({


  inputContainerStyle :{

    alignItems:'flex-start',
    justifyContent:'center',
    borderWidth:'1',
    borderColor:'#000',
    borderRadius:5,
    marginVertical:10,
    marginHorizontal:10,
    paddingRight:10,
    height:50
  },

  textStyle:{

    fonstSize:16,
    marginHorizontal:10
  }
})