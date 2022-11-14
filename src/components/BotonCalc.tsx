import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    label: string;
    color?: string;
    ancho?: boolean;
    action: (numeroTexto: string) => void;
}

export const BotonCalc = ({
    label,
    color = '#2D2D2D',
    ancho = false,
    action,
}: Props) => {
    return (
        <TouchableOpacity onPress={() => action(label)}>
            <View
                style={{
                    ...styles.boton,
                    backgroundColor: color,
                    width: ancho ? 180 : 80,
                }}>
                <Text
                    style={{
                        ...styles.botonTexto,
                        color: color === '#2D2D2D' ? '#DDDDDD' : '#1B2430',
                    }}>
                    {label}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: '#DDDDDD',
        fontWeight: '500',
    },
});
