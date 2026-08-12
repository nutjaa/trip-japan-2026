import japan2026 from './trips/japan-2026.json';
import hokkaido2027 from './trips/hokkaido-2027.json';
import bali2027 from './trips/bali-2027.json';

export const allTrips = [
  japan2026,
  bali2027,
  hokkaido2027
];

export const defaultTripId = japan2026.id;

export function getTripById(id) {
  return allTrips.find(trip => trip.id === id) || allTrips[0];
}
