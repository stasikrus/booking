import React, { useEffect, useRef } from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import { getActiveHoverOffer } from "../../store/selectors";

import "leaflet/dist/leaflet.css";

const Map = ({ points, heightMap, isActiveMarker }) => {
  const mapRef = useRef();
  const activeHoverOffer = getActiveHoverOffer();

  const currentCityMap = points[0].city.location;

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [currentCityMap.latitude, currentCityMap.longitude],
      zoom: currentCityMap.zoom
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    return () => {
      mapRef.current.remove();
    };
  }, [currentCityMap]);

  useEffect(() => {
    points.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: point.id === activeHoverOffer ? `./img/pin-active.svg`: `./img/pin.svg`,
        iconSize: [27, 39]
      });

      leaflet.marker({
        lat: point.location.latitude,
        lng: point.location.longitude
      },
      {
        icon: customIcon
      })
      .addTo(mapRef.current)
      .bindPopup(point.title);
    });
  }, [activeHoverOffer, currentCityMap]);

  return (
    <div id="map" style={{ height: `${heightMap}px` }}></div>
  );
};

Map.propTypes = {
  points: PropTypes.array.isRequired,
  heightMap: PropTypes.number.isRequired,
  isActiveMarker: PropTypes.number,
}

export default Map;
