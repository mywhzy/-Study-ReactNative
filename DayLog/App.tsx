import { NavigationContainer } from '@react-navigation/native';
import RootStack from './screens/RootStack';
import { LogContextProvider } from './contexts/LogContext';

const App = () => {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
