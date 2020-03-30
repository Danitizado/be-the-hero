import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './styles';

import * as MailComposer from 'expo-mail-composer';

import { Feather } from '@expo/vector-icons'
import logo from '../../assets/logo.png'

export default function Details () {
    
    const route = useRoute();
    const inci = route.params.inci;

    const navigation = useNavigation();
    const message = `Olá ${inci.name}, estou entrando em contato, pois quero resolver o caso "${inci.description}" com o valor de ${Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
        }).format(inci.value)}.`

    function navigateBack () {
        navigation.goBack()
    }

    function sendEmail () {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${inci.title}`,
            recipients: [inci.email],
            body: message
        });
    }

    function sendWpp () {
        Linking.openURL(`whatsapp://send?phone=${inci.wpp}&text=${message}`)        
    } 

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <View style={styles.header}>
                    <Image source={logo}/>

                    
                        <Feather name="arrow-left" color="#e02041" size={30}/>
                    
                </View>
            </TouchableOpacity>

            <View style={styles.incidentContainer}>
                <View style={styles.incident}>
                <Text style={styles.incidentProp}>ONG:</Text>
                    <Text style={styles.incidentValue}>{inci.name}</Text>
                    
                    <Text style={styles.incidentProp}>DESCRIÇÃO:</Text>
                    <Text style={styles.incidentValue}>{inci.title}</Text>

                    <Text style={styles.incidentProp}>VALOR:</Text>
                    <Text style={styles.incidentValueLast}>
                        {Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' 
                            }).format(inci.value)}
                        </Text>

                </View>
                <View style={styles.contactBox}>

                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja herói desse caso.</Text>
                    
                    <Text style={styles.heroDescription}>ENTRE EM CONTATO:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity onPress={sendEmail} style={styles.action}>
                            <Text style={styles.actionText}>Via E-mail</Text> 
                        </TouchableOpacity>
                        <TouchableOpacity onPress={sendWpp} style={styles.action}>
                            <Text style={styles.actionText}>Via WhatsApp</Text> 
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}