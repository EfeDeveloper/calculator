import { BotonCalc } from '@app/components/BotonCalc';
import { generalStyles } from '@app/theme/appTheme';
import React from 'react';
import { Text, View } from 'react-native';

export const CalculadoraScreen = () => {
    return (
        <View style={generalStyles.calculadoraContainer}>
            <Text style={generalStyles.resultadoPequeno}>1,500.00</Text>
            <Text style={generalStyles.resultado}>1,500.00</Text>

            <View style={generalStyles.fila}>
                <BotonCalc label="C" color="#9B9B9B" />
                <BotonCalc label="+/-" color="#9B9B9B" />
                <BotonCalc label="%" color="#9B9B9B" />
                <BotonCalc label="÷" color="#FF9427" />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="7" />
                <BotonCalc label="8" />
                <BotonCalc label="9" />
                <BotonCalc label="x" color="#FF9427" />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="4" />
                <BotonCalc label="5" />
                <BotonCalc label="6" />
                <BotonCalc label="-" color="#FF9427" />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="1" />
                <BotonCalc label="2" />
                <BotonCalc label="3" />
                <BotonCalc label="+" color="#FF9427" />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="0" ancho />
                <BotonCalc label="." />
                <BotonCalc label="=" color="#FF9427" />
            </View>
        </View>
    );
};
