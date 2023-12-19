import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Expenses, Add, Reports, Settings } from './screens';
import { theme } from './theme';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={theme}>
        <StatusBar style="light" />
        <Tab.Navigator screenOptions={{
          tabBarStyle: {
            backgroundColor: theme.colors.card,
          },
        }}>
          <Tab.Screen name="Expenses" component={Expenses} />
          <Tab.Screen name="Reports" component={Reports} />
          <Tab.Screen name="Add" component={Add} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
 
