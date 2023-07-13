import React, { useEffect, useRef } from "react";
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { filterCityMapByName } from "../../utils";

import "leaflet/dist/leaflet.css";

const Map = ({ city, points, heightMap, isActiveMarker, cityState }) => {
  const mapRef = useRef();

  const currentCityMap = filterCityMapByName(city, cityState);

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: [currentCityMap.latitude, currentCityMap.longitude],
      zoom: 12
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
        iconUrl: point.id === isActiveMarker ? `./img/pin-active.svg`: `./img/pin.svg`,
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
      .bindPopup(point.name);
    });
  }, [isActiveMarker, currentCityMap]);

  return (
    <div id="map" style={{ height: `${heightMap}px` }} ref={mapRef}></div>
  );
};

const mapStateToProps = (state) => ({
  cityState: state.city,
  offers: state.offers,
});


export default connect(mapStateToProps)(Map);
