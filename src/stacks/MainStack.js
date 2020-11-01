import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import teste from '../screens/teste';
import teste1 from '../screens/teste1';
import teste2 from '../screens/teste2';
import teste3 from '../screens/teste3';
import teste4 from '../screens/teste4';
import teste5 from '../screens/teste5';
import teste6 from '../screens/teste6';
import teste7 from '../screens/teste7';

const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="teste"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="teste" component={teste} />
            <Stack.Screen name="teste1" component={teste1} />
            <Stack.Screen name="teste2" component={teste2} />
            <Stack.Screen name="teste3" component={teste3} />
            <Stack.Screen name="teste4" component={teste4} />
            <Stack.Screen name="teste5" component={teste5} />
            <Stack.Screen name="teste6" component={teste6} />
            <Stack.Screen name="teste7" component={teste7} />
        </Stack.Navigator>
    );
}