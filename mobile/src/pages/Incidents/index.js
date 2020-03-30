import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';

import logo from '../../assets/logo.png'

import styles from './styles'

import api from '../../services/api'

export default function Incidents () {
    const navigation = useNavigation();

    function navigateToDetails (inci) {
        navigation.navigate('Details', { inci })
    }

    const [inci, setInci] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    async function loadInci () {
        if (loading) {
            return;
        }

        if (total > 0 && inci.length === total) {
            return;
        }

        setLoading(true);


        const res = await api.get('incidents', {
            params: { page }
        })

        setInci([...inci, ...res.data])
        setTotal(res.headers['x-total-count'])
        setPage(page + 1)
        setLoading(false)
    }

    useEffect(() => {
        loadInci();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logo}/>
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
                </Text>     
            </View>

            <Text style={styles.title}>Seja Bem-Vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia!</Text>
            
            <FlatList
            keyExtractor={inci => String(inci.id)}
            style={styles.incidentList}
            showsVerticalScrollIndicator={false}
            onEndReached={loadInci}
            onEndReachedThreshold={0.5}
            data={inci}
            renderItem={( { item: inci } ) => (
                <View style={styles.incident}>
                    <Text style={styles.incidentProp}>ONG:</Text>
            <Text style={styles.incidentValue}>{inci.name} de {inci.city} - {inci.uf}</Text>
                    
                    <Text style={styles.incidentProp}>DESCRIÇÃO:</Text>
                    <Text style={styles.incidentValue}>{inci.description}</Text>

                    <Text style={styles.incidentProp}>VALOR:</Text>
                    <Text style={styles.incidentValue}>
                        {Intl.NumberFormat('pt-BR', { 
                            style: 'currency', 
                            currency: 'BRL' 
                            }).format(inci.value)}
                        </Text>

                    <TouchableOpacity 
                    style={styles.detailsButton}
                    onPress={() => navigateToDetails(inci)}
                    >
                        <Text style={styles.detailsButtonText}>Ver mais detalhes...</Text>
                        <Feather name="arrow-right" color="#e02041" size={20}/>
                    </TouchableOpacity>

                </View>
            )}
            />          
        </View>
    )
}