import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

//Sub-Screens
import Assignment from './SubScreens/Assignment';
import Attendence from './SubScreens/Attendence';
import ClassAlert from './SubScreens/ClassAlert';
import Exams from './SubScreens/Exams';
import Fee from './SubScreens/Fee';
import Marks from './SubScreens/Marks';
import New from './SubScreens/New';
import Supply from './SubScreens/Supply';
const Stack = createStackNavigator();

const SubScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="New" component={New} />
        <Stack.Screen name="Exams" component={Exams} />
        <Stack.Screen name="Attendence" component={Attendence} />
        <Stack.Screen name="ClassAlert" component={ClassAlert} />
        <Stack.Screen name="Fee" component={Fee} />
        <Stack.Screen name="Marks" component={Marks} />
        <Stack.Screen name="Supply" component={Supply} />
        <Stack.Screen name="Assignment" component={Assignment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default SubScreenNavigation;
