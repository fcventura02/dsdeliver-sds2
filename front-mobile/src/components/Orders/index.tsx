import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Alert, Text } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../../service/api';
import { Order } from '../../utils/types';
import Header from '../Header';
import OrderCard from '../OrderCard';

export default function Orders() {
    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const isFocused = useIsFocused()

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(res => setOrders(res.data))
            .catch(() => Alert.alert("Tivemos um problema para acessar o servidor."))
            .finally(() => setIsLoading(false))
    }

    useEffect(() => {
        if (isFocused)
            fetchData();
    }, [isFocused]);

    const navigation = useNavigation();
    const handleOnPress = (order: Order) => {
        navigation.navigate('OrderDetails', { order });
    }

    return (
        <>
            <Header />
            <ScrollView style={styles.container} >
                {isLoading ? <Text>Buscando pedidos....</Text> : orders.map(order =>
                    <TouchableWithoutFeedback onPress={() => handleOnPress(order)} key={order.id} >
                        <OrderCard order={order} />
                    </TouchableWithoutFeedback>
                )}
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});