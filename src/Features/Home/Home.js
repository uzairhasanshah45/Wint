import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native'
import { styles } from "./style";


export default function Home(props) {

  const renderButtons = (name, no) => {

    return(
      <>
        <TouchableOpacity style={styles.buttonView} onPress={() => (no == 1 ? props.navigation.navigate('HibernatingAnimals') : props.navigation.navigate(name))}>
          <Text style={styles.buttonText}>{name}</Text>
        </TouchableOpacity>
      </>
    )
  }

  return(
    <View style={styles.mainView}>
      <View style={styles.homeHeader}>
        <Text style={styles.headrtxt}>Home</Text>
      </View>        
      <View style={styles.container}>
        {renderButtons('Hibernating Animals', 1)}
        {renderButtons('Quiz')}
      </View>
      </View>
  )
}
