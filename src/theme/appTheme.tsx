import { StyleSheet } from 'react-native';

export const generalStyles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: '#1B2430',
    },
    calculadoraContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    resultado: {
        color: '#DDDDDD',
        fontSize: 60,
        textAlign: 'right',
    },
    resultadoPequeno: {
        color: '#DDDDDF80',
        fontSize: 30,
        textAlign: 'right',
    },
    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
});
