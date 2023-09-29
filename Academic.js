
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import searchIcon from '../../assets/SearchBar.png';
import sidebarIcon from '../../assets/Sidebar.png';
import bell from '../../assets/bell.png';


const cardData = [
  { id: 1, image: require('../../assets/exams.png'), title: 'Exams' },
  { id: 2, image: require('../../assets/attendence.png'), title: 'Attendence' },
  { id: 3, image: require('../../assets/marks.png'), title: 'Marks' },
  { id: 4, image: require('../../assets/supply.png'), title: 'Supply Exam' },
  { id: 5, image: require('../../assets/Assignment.png'), title: 'Assignment' },
  { id: 6, image: require('../../assets/fees.png'), title: 'Fee Detail' },
  { id: 7, image: require('../../assets/classAlerts.png'), title: 'Class Alerts' },
  { id: 8, image: require('../../assets/ragging.png'), title: 'Anti Ragging' },
  { id: 9, image: require('../../assets/leadrs.png'), title: 'Leaders' },
  { id: 10, image: require('../../assets/sujects.png'), title: 'Anti Ragging' },
];

const Academic = () => {

  // const navigation = useNavigation();

  // const handleCardPress = (title) => {
  //   navigation.navigate(title);
  // };

// onPress={() => handleCardPress(card.title)}  // on touchable opacity
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.headerIcons}>
            <View style={styles.sidebarIconContainer}>
              <Image source={sidebarIcon} style={styles.icon} resizeMode="contain" />
            </View>
            <View style={styles.rightIconContainer}>
              <View style={styles.searchIconContainer}>
                <Image source={searchIcon} style={styles.icon} resizeMode="contain" />
              </View>
              <View style={styles.searchIconContainer}>
                <Image source={bell} style={styles.icon} resizeMode="contain" />
              </View>
            </View>
          </View>
          <Text style={styles.heading}>Acads</Text>
          <Text style={{ fontSize: 17, paddingLeft: 15 }}>Your Academic Performance</Text>
        </View>
      
        <View style={styles.body}>
          <View style={styles.content}>
            {cardData.map((card) => (
              <View style={styles.card} key={card.id}>
                <TouchableOpacity >
                  <View style={styles.image}>
                    <Image source={card.image} />
                  </View>
                  <Text style={{ fontSize: 17, paddingLeft: 15 }}>{card.title}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CDB4DB',
    height: 165,
    zIndex: 1,
    position: 'relative',
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 35,
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 30,
    paddingTop: 7,
    paddingLeft: 15,
    fontWeight: "600",
  },
  icon: {
    width: 20,
    height: 20,
  },
  searchIconContainer: {
    marginRight: 5,
    borderRadius: 50,
    backgroundColor: "white",
    width: 40,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  rightIconContainer: {
    display: "flex",
    flexDirection: "row",
    paddingRight: 10,
  },
  sidebarIconContainer: {
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "white",
    width: 65,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    top: -20,
    height: "auto",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingTop: 40,
    width: '80%',
    height: "auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: 145,
    height: 160,
    display: "flex",
    flexDirection: "column",
    borderRadius: 10,
    borderColor: '#CDB4DB',
    borderWidth: 5,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },


});
export default Academic;
