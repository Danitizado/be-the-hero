import { StyleSheet } from 'react-native';
import Consts from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Consts.statusBarHeight + 20,
        backgroundColor: '#f3f3f0'
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    incident: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 16
    },

    incidentContainer: {
        marginTop: 28
    },

    incidentProp: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    incidentValue: {
        marginTop: 8,
        marginBottom: 24,
        color: '#737380'
    },
    incidentValueLast: {
        marginTop: 8,
        marginBottom: 0,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 16
    },
    heroTitle: {
        fontWeight: 'bold',
        fontSize: 24,
        color: '#13131a',
        lineHeight: 36
    },
    heroDescription: {
        marginTop: 20,
        color: '#737380',
    },

    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 16,
        borderRadius: 10
    },
    action: {
        backgroundColor: '#e02041',
        height: 50,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    actionText: {
        color: '#fff',
        fontWeight: 'bold'
    }
});