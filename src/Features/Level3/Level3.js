import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {View, Text, Image, ImageBackground, SafeAreaView} from 'react-native';
import {actors1, actors2} from '../../shared/actors';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../HibernatingAnimals/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Level3 = (props) => {
  const Items = actors1;
  const totalProblems = Items.length - 1;
  const myIcon = <Icon name="heart" style={styles.fontIcon} />;
  const [images, setImages] = useState([]);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [life, setLife] = useState(3);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [count, setCount] = useState(0)
  const threshold = 3;
  const {navigation} = props;

  useEffect(() => {
    itemShuffle();
  }, [props.route.params]);

  useEffect(() => {
    if (images.length > 0) {
      randomOptions();
      setLoading(true);
    }
  }, [images]);

  useEffect(() => {
    if (currentQuestion > 0) {
      randomOptions();
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (life === 0) {
      images.splice(0,currentQuestion)
      setCurrentQuestion(0)
      setCount(count+1)
      failedScreen();
    }
  }, [life]);
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setCurrentQuestion(0);
      setLife(3);
      setScore(0);
    });

    return unsubscribe;
  }, [props.navigation]);

  const iconLoop = () => {
    let array = [];
    for (let i = 0; i < life; i++) {
      array.push(<View key={i}>{myIcon}</View>);
    }
    return array;
  };

  const randomOptions = () => {

    let index;
    let names = [];
    console.log(images[currentQuestion]);
    let arr = [...images];
    let i = arr.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    const slice = arr.slice(0, 4);
    for (let i = 0; i < slice.length; i++) {
      names.push(arr[i].name);
    }
    let exists = false;
    for (let i = 0; i < names.length; i++) {
      if (names[i] === images[currentQuestion].name) {
        exists = true;
      }
    }
    if (exists === false) {
      index = Math.floor(Math.random() * 3);
      names.splice(index, 0, images[currentQuestion].name);
    }
    setOptions(names);
  };

  const itemShuffle = () => {
    const array = [];
    console.log('item shuffle count level 3', count)

    if(props.route.params && count>=1 && count<=1)
    {
      array.push(...props.route.params.image)
      if(array.length < 13)
      {
        let i = 0
        while(array.length != 13)
        {
          array.push(actors2[i])
          i++
        }
      }
    }
    else{
      array.push(...Items)
      if(count>1)
      {
        setCount(0)
      }
    }

    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setImages(array);
  };

  const failedScreen = () => {
    return navigation.navigate('FailedScreen', {level: 3, image: images});
  };

  const checkAnswer = (input) => {
    let lyf;
    if (input == images[currentQuestion].name) {
      setScore(score + 1);
    } else {
      setLife(life - 1);
    }
    if (currentQuestion === totalProblems) {
      return navigation.navigate('SuccessScreen', {level: 3});
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const renderImages = () => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={images[currentQuestion].image} />
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Guess the person shown above.</Text>
          <Image source={require('../../assets/images/questionmark.gif')} style={styles.gifImg}/>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[0]);
              }}>
              <Text style={styles.options}>{options[0]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[1]);
              }}>
              <Text style={styles.options}>{options[1]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[2]);
              }}>
              <Text style={styles.options}>{options[2]}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsBox}>
          <View style={styles.individualOptions}>
            <TouchableOpacity
              onPress={() => {
                checkAnswer(options[3]);
              }}>
              <Text style={styles.options}>{options[3]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView backgroundColor={'#92B6D4'} opacity={0.95} />
      <View style={styles.scoreContainer}>
        <View style={styles.individualScore}>
          <Text style={styles.scoreText}>{score} Points</Text>
        </View>
        <View style={styles.individualScore}>
          <View style={styles.iconContainer}>{iconLoop()}</View>
        </View>
      </View>
      <View style={styles.problemContainer}>
        <Text style={styles.scoreText}>Problem</Text>
        <Text style={styles.scoreText}>
          {currentQuestion} | {totalProblems}
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>WeFamous</Text>
        <Text style={styles.subheaderText}>Learn Famous Things With Quiz</Text>
      </View>
      {loading ? renderImages() : null}
    </View>
  );
};

export default Level3;
