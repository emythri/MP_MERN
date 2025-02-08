// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/HomePage';
import GraphicalMethodPage from './components/GraphicalMethod/GraphicalMethodPage';
import GraphicalMethodApplication from './components/GraphicalMethod/GraphicalMethodApplication';
import GraphicalMethodResult from './components/GraphicalMethod/GraphicalMethodResult';
import GraphicalMethodSolve from './components/GraphicalMethod/GraphicalMethodSolve';
import SimplexMethodPage from './components/SimplexMethod/SimplexMethodPage';
import SimplexMethodApplication from './components/SimplexMethod/SimplexMethodApplication';
import SimplexMethodResult from './components/SimplexMethod/SimplexMethodResult';
import SimplexMethodSolve from './components/SimplexMethod/SimplexMethodSolve'
import GraphicalMethodSteps from './components/GraphicalMethod/GraphicalMethodSteps';
import SimplexMethodSteps from './components/SimplexMethod/SimplexMethodSteps';

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/graphical" element={<GraphicalMethodPage />} />
                    <Route path="/graphical-application" element={<GraphicalMethodApplication />} />
                    <Route path="/graphical-result" element={<GraphicalMethodResult />} />
                    <Route path="/graphical-solve" element={<GraphicalMethodSolve />} />
                    <Route path="/simplex" element={<SimplexMethodPage />} />
                    <Route path="/simplex-application" element={<SimplexMethodApplication />} />
                    <Route path="/simplex-result" element={<SimplexMethodResult />} />
                    <Route path="/simplex-solve" element={<SimplexMethodSolve />} />
                    <Route path="/graphical-steps" element={<GraphicalMethodSteps />} />
                    <Route path="/simplex-steps" element={<SimplexMethodSteps />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;


// // App.js
// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomePage from './src/components/Home/HomePage';
// import GraphicalMethodPage from './src/components/GraphicalMethod/GraphicalMethodPage';
// import GraphicalMethodSolve from './src/components/GraphicalMethod/GraphicalMethodSolve';
// import SimplexMethodPage from './src/components/SimplexMethod/SimplexMethodPage';
// import SimplexMethodSolve from './src/components/SimplexMethod/SimplexMethodSolve';
// import { Provider as PaperProvider } from 'react-native-paper';
// import { Appbar } from 'react-native-paper';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <PaperProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="HomePage">
//           <Stack.Screen name="HomePage" component={HomePage} options={{ header: (props) => <CustomHeader {...props} /> }} />
//           <Stack.Screen name="GraphicalMethodPage" component={GraphicalMethodPage} options={{ header: (props) => <CustomHeader {...props} /> }} />
//           <Stack.Screen name="GraphicalMethodSolve" component={GraphicalMethodSolve} options={{ header: (props) => <CustomHeader {...props} /> }} />
//           <Stack.Screen name="SimplexMethodPage" component={SimplexMethodPage} options={{ header: (props) => <CustomHeader {...props} /> }} />
//           <Stack.Screen name="SimplexMethodSolve" component={SimplexMethodSolve} options={{ header: (props) => <CustomHeader {...props} /> }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </PaperProvider>
//   );
// };

// const CustomHeader = ({ scene, previous, navigation }) => (
//   <Appbar.Header>
//     {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
//     <Appbar.Content title="Mathematical Programming" />
//   </Appbar.Header>
// );

// export default App;

