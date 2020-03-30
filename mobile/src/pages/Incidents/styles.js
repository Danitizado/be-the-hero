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

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold',
        color: '#434350'
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 48,
        paddingBottom: 16,
        color: '#13131a'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 28
    },

    incident: {
        padding: 24,
        borderRadius: 10,
        backgroundColor: '#FFF',
        marginBottom: 16
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

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }

})