import { BotonCalc } from '@app/components/BotonCalc';
import { useCalculadora } from '@app/hooks/useCalculadora';
import { generalStyles } from '@app/theme/appTheme';
import React from 'react';
import { Text, View } from 'react-native';

export const CalculadoraScreen = () => {
    const {
        limpiar,
        armarNumero,
        positivoNegativo,
        btnDelete,
        numero,
        numeroAnterior,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={generalStyles.calculadoraContainer}>
            {numeroAnterior !== '0' && (
                <Text style={generalStyles.resultadoPequeno}>
                    {numeroAnterior}
                </Text>
            )}

            <Text
                style={generalStyles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {numero}
            </Text>

            <View style={generalStyles.fila}>
                <BotonCalc label="C" color="#9B9B9B" action={limpiar} />
                <BotonCalc
                    label="+/-"
                    color="#9B9B9B"
                    action={positivoNegativo}
                />
                <BotonCalc label="del" color="#9B9B9B" action={btnDelete} />
                <BotonCalc label="÷" color="#FF9427" action={btnDividir} />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="7" action={armarNumero} />
                <BotonCalc label="8" action={armarNumero} />
                <BotonCalc label="9" action={armarNumero} />
                <BotonCalc label="x" color="#FF9427" action={btnMultiplicar} />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="4" action={armarNumero} />
                <BotonCalc label="5" action={armarNumero} />
                <BotonCalc label="6" action={armarNumero} />
                <BotonCalc label="-" color="#FF9427" action={btnRestar} />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="1" action={armarNumero} />
                <BotonCalc label="2" action={armarNumero} />
                <BotonCalc label="3" action={armarNumero} />
                <BotonCalc label="+" color="#FF9427" action={btnSumar} />
            </View>
            <View style={generalStyles.fila}>
                <BotonCalc label="0" ancho action={armarNumero} />
                <BotonCalc label="." action={armarNumero} />
                <BotonCalc label="=" color="#FF9427" action={calcular} />
            </View>
        </View>
    );
};
