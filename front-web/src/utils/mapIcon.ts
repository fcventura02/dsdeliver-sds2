import Leaflet from "leaflet"
import mapMarkerImg from '../assets/img/marker_map.svg';
import mapMarkerPeopleImg from '../assets/img/marker_map_people.svg';


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })


const mapIconPeople = Leaflet.icon({
    iconUrl: mapMarkerPeopleImg,
  
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [0, -60]
  })

export  {mapIconPeople, mapIcon}