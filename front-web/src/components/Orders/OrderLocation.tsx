import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import AscSelect from 'react-select/async';
import { fetchLocalMapBox } from '../../services/api';
import { OrderLocationData } from './types';

const initialPosition = {
    lat: -19.9155477,
    lng: -43.9439658
}



type Place = {
    label?: string;
    value?: string;
    position: {
        lat: number;
        lng: number;
    }
}

type Props = {
    onChangeLocation: (location: OrderLocationData) => void;
}

function OrderLocation({onChangeLocation}: Props) {
    const [address, setAddress] = useState<Place>({
        position: initialPosition
    })

    const loadOptions = async (inputValue: string, callback: (places: Place[]) => void) => {
        const response = await fetchLocalMapBox(inputValue);

        const places = response.data.features.map((item: any) => {
            return ({
                label: item.place_name,
                value: item.place_name,
                position: {
                    lat: item.center[1],
                    lng: item.center[0]
                },
                place: item.place_name,
            });
        });

        callback(places);
    };

    const handleChangeSelect = (place: Place) => {
        setAddress(place);
        onChangeLocation({
            latitude: place.position.lat,
            longitude: place.position.lng,
            address: place.label!
        });
    };

    return (
        <div className="order_location_container">
            <div className="order_location_content">
                <h3 className="order_location_title">
                    Selecione onde o pedido deve ser entregue:
                </h3>
                <div className="filter_container">
                    <AscSelect placeholder="Digite o endereço para entrega" className="filter" loadOptions={loadOptions} onChange={value => handleChangeSelect(value as Place)} />
                </div>
                <MapContainer center={address.position}
                    zoom={15}
                    key={address.position.lat}
                    style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                >
                    <TileLayer
                        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX}`}
                    />
                    <Marker position={address.position}>
                        <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                            {address.label}
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
        </div>
    )
}
export default OrderLocation;