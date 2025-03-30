import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffffff',
                headerStyle: {
                        backgroundColor: '#25292e',
                    },
                    headerShadowVisible: true, //This is one i should play with
                    headerTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#25292e',
                    },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                      ),
                }}
            />
            <Tabs.Screen
                name="tasks"
                options={{
                    title: 'Tasks',
                    tabBarIcon: ({ color, focused }) => (
                      <Ionicons name={'list'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="info"
                options={{
                    title: 'Info',
                    tabBarIcon: ({ color, focused }) => (
                      <Ionicons name={'book'} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}