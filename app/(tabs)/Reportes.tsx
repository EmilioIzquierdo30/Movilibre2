import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const ReportScreen: React.FC = () => {
  // Ejemplo de coordenadas (puedes reemplazar con tus datos reales)
  const routeCoordinates = [
    { latitude: 19.4326, longitude: -99.1332 }, // CDMX Centro
    { latitude: 19.434, longitude: -99.14 },
    { latitude: 19.438, longitude: -99.145 },
    { latitude: 19.44, longitude: -99.15 }, // Fin de ruta
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Reporte</Text>
      <Text style={styles.date}>24 abr 2024</Text>

      {/* Resumen */}
      <Text style={styles.sectionTitle}>Resumen</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>32,5 km</Text>
          <Text style={styles.summaryLabel}>Distancia</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>1 h 5 min</Text>
          <Text style={styles.summaryLabel}>Duración</Text>
        </View>
        <View style={styles.summaryItem}>
          <Text style={styles.summaryValue}>30,0 km/h</Text>
          <Text style={styles.summaryLabel}>Velocidad prom.</Text>
        </View>
      </View>

      {/* Mapa interactivo */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 19.436,
          longitude: -99.14,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {/* Línea azul de la ruta */}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="blue"
          strokeWidth={4}
        />

        {/* Marcadores */}
        <Marker
          coordinate={routeCoordinates[0]}
          title="Inicio"
          pinColor="red"
        />
        <Marker
          coordinate={routeCoordinates[routeCoordinates.length - 1]}
          title="Fin"
          pinColor="green"
        />
      </MapView>

      {/* Eventos de riesgo */}
      <Text style={styles.sectionTitle}>Eventos de riesgo</Text>
      <View style={styles.eventContainer}>
        <Icon name="alert" size={24} color="#000" />
        <Text style={styles.eventText}>2 aceleraciones/frenadas bruscas</Text>
      </View>

      {/* Alertas meteorológicas */}
      <Text style={styles.sectionTitle}>Alertas meteorológicas</Text>
      <View style={styles.eventContainer}>
        <Icon name="weather-rainy" size={24} color="#000" />
        <Text style={styles.eventText}>Lluvia</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#555',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#555',
  },
  map: {
    width: width - 32,
    height: 220,
    marginTop: 16,
    borderRadius: 12,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  eventText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default ReportScreen;
