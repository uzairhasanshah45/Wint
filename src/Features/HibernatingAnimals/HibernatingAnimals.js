import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView, Modal, TouchableOpacity} from 'react-native';
import { animals } from '../../shared/animals';
import BackIcon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const HibernatingAnimals = (props) => {

  const [description, setDescription] = useState()
  const [animalName, setAnimalName] = useState('')
  const [modalView, setModalView] = useState(false)
  const [calanderVisible, setCalanderVisible] = useState(false)

  const animal = animals

  const renderpics = (img, name, dsc) => {
    return(
      <TouchableOpacity style={styles.animalImageContainer} onPress={() => (setDescription(dsc), setAnimalName(name), setModalView(true))}>
        <Image source={img} style={styles.animalImage}/>
        <Text style={styles.imgtxt}>{name}</Text>
      </TouchableOpacity>
    )
  }
  return(
    <View style={styles.container}>
      <View style={styles.animalHeader}>
        <TouchableOpacity style={{ position: 'absolute',  left: 15 }} onPress={() => props.navigation.goBack()}>
          <BackIcon name="arrow-back" size={20} color='white' />
        </TouchableOpacity>
        <Text style={styles.headrtxt}>Hibernating Animals</Text>
      </View>
      <ScrollView style={{marginTop: 20}}>
      {renderpics(animal[0].image, animal[0].name, animal[0].desc)}
      {renderpics(animal[1].image, animal[1].name, animal[1].desc)}
      {renderpics(animal[2].image, animal[2].name, animal[2].desc)}
      {renderpics(animal[3].image, animal[3].name, animal[3].desc)}
      {renderpics(animal[4].image, animal[4].name, animal[4].desc)}
      {renderpics(animal[5].image, animal[5].name, animal[5].desc)}
      {renderpics(animal[6].image, animal[6].name, animal[6].desc)}
      {renderpics(animal[7].image, animal[7].name, animal[7].desc)} 
      </ScrollView> 

      <Modal 
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => setModalView(false)}>
        <View style={[styles.container1, styles.modalBackgroundStyle]}>
            <View style={styles.modalView}>
              <View style={{flexDirection: "row"}}>
                <Text style={styles.modalHeading}>WHERE {animalName} HIBERNATE</Text>
              </View>
              <ScrollView>
                <View style={styles.dsc}>
                  <Text style={styles.dscTxt}>{description}</Text>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={styles.openButton}
                onPress={() => setModalView(false)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
    </View>
  )
}
export default HibernatingAnimals;
