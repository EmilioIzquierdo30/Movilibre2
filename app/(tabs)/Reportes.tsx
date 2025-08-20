import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const ReportScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.title}>Reporte</Text>
      <Text style={styles.date}>24 abr 2024</Text>

      {/* Resumen */}
      <Text style={styles.sectionTitle}>Resumen</Text>
      <View style={styles.summaryContainer}>
        <View style={styles.summaryItem}>
          <Icon name="map-marker-distance" size={24} color="#007AFF" />
          <Text style={styles.summaryValue}>32,5 km</Text>
          <Text style={styles.summaryLabel}>Distancia</Text>
        </View>
        <View style={styles.summaryItem}>
          <Icon name="clock-outline" size={24} color="#007AFF" />
          <Text style={styles.summaryValue}>1 h 5 min</Text>
          <Text style={styles.summaryLabel}>Duración</Text>
        </View>
        <View style={styles.summaryItem}>
          <Icon name="speedometer" size={24} color="#007AFF" />
          <Text style={styles.summaryValue}>30,0 km/h</Text>
          <Text style={styles.summaryLabel}>Velocidad prom.</Text>
        </View>
      </View>

      {/* Placeholder de mapa - Imagen estática */}
      <View style={styles.mapPlaceholder}>
        <Icon name="map" size={48} color="#ccc" />
        <Text style={styles.placeholderText}>Mapa interactivo próximamente</Text>
        <Text style={styles.placeholderSubtext}>
          En desarrollo para la versión móvil
        </Text>
      </View>

      {/* Eventos de riesgo */}
      <Text style={styles.sectionTitle}>Eventos de riesgo</Text>
      <View style={styles.eventContainer}>
        <Icon name="alert-octagon" size={24} color="#FF3B30" />
        <View style={styles.eventDetails}>
          <Text style={styles.eventText}>2 aceleraciones bruscas</Text>
          <Text style={styles.eventTime}>09:15 AM - 09:30 AM</Text>
        </View>
      </View>

      <View style={styles.eventContainer}>
        <Icon name="alert-octagon" size={24} color="#FF3B30" />
        <View style={styles.eventDetails}>
          <Text style={styles.eventText}>3 frenadas bruscas</Text>
          <Text style={styles.eventTime}>10:45 AM - 11:00 AM</Text>
        </View>
      </View>

      {/* Alertas meteorológicas */}
      <Text style={styles.sectionTitle}>Alertas meteorológicas</Text>
      <View style={[styles.eventContainer, styles.weatherAlert]}>
        <Icon name="weather-pouring" size={24} color="#007AFF" />
        <View style={styles.eventDetails}>
          <Text style={styles.eventText}>Lluvia moderada</Text>
          <Text style={styles.eventTime}>Durante 45 min del recorrido</Text>
        </View>
      </View>

      {/* Puntuación de seguridad */}
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreLabel}>Puntuación de seguridad</Text>
        <View style={styles.scoreCircle}>
          <Text style={styles.scoreValue}>82%</Text>
        </View>
        <Text style={styles.scoreComment}>¡Buen trabajo! Sigue así</Text>
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
    color: '#000',
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 24,
    marginBottom: 16,
    color: '#000',
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryItem: {
    alignItems: 'center',
    flex: 1,
    padding: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
    marginHorizontal: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#000',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  mapPlaceholder: {
    width: width - 32,
    height: 200,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#e9ecef',
    borderStyle: 'dashed',
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginTop: 8,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  eventContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  weatherAlert: {
    backgroundColor: '#e3f2fd',
    borderColor: '#bbdefb',
  },
  eventDetails: {
    marginLeft: 12,
    flex: 1,
  },
  eventText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  eventTime: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  scoreContainer: {
    alignItems: 'center',
    marginTop: 24,
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 20,
  },
  scoreLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  scoreCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#E8F5E8',
  },
  scoreValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  scoreComment: {
    fontSize: 14,
    color: '#666',
    marginTop: 12,
    fontStyle: 'italic',
  },
});

export default ReportScreen;