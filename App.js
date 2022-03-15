import React from 'react'
import Index from './components/Home page/Index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuizPage from './components/Quiz Page/QuizPage';
import PlayPage from './components/Quiz/PlayPage';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Index} options={{headerShown: false}} />
        <Stack.Screen options={{headerShown: false}} name="quizPage" component={PlayPage} />
      </Stack.Navigator>
    </NavigationContainer>
    )
  }

export default App