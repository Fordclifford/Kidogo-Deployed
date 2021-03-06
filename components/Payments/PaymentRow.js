import React from 'react'
import {View, Text} from 'react-native'
import{Icon} from 'react-native-elements'
import {styles} from './styles'

export default function PaymentRow(props){
  return(
    <View>
      <View style={styles.paymentRow}>
        <Text style={[styles.textRow, {flex:0.2, marginLeft:10}]}>{props.date.slice(0,5)}</Text>
        <Text style={[styles.textRow, {flex:0.3 }]}>
          {Number(props.balanceBefore > Number(props.balanceAfter))
            ? `- K${props.amount}`
            : `K${props.amount}`
          }
        </Text>
        <View style={[styles.textRow, {flex:0.5, flexDirection:'row'}]}>
          <Text style={[styles.textRow, {flex:0.45}] }>K{props.balanceBefore}</Text>
          <Icon name="arrow-forward" color='#ffffff80' style={{flex:0.1}}/>
          <Text style={[styles.textRow, {textAlign:'right', marginRight:10, flex:0.45 }]}>K{props.balanceAfter}</Text>
        </View>
      </View>
      <View style={{height:1, marginVertical:10, backgroundColor:'#ffffff80'}}></View>
    </View>
  )
}
