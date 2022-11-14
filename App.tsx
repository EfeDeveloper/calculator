import { CalculadoraScreen } from '@app/screens/CalculadoraScreen';
import { generalStyles } from '@app/theme/appTheme';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
    return (
        <SafeAreaView style={generalStyles.fondo}>
            <StatusBar backgroundColor="#1B2430" barStyle="light-content" />
            <CalculadoraScreen />
        </SafeAreaView>
    );
};

export default App;
