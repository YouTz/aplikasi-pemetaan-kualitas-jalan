export const appName = 'Aplikasi Pemetaan Kualitas Jalan'; // will be displayed in browser's tab
export const leafletOptions = {
    zoomControl: false, // zoom control button
    initialZoom: 25,
    initialLocation: [-7.282367554399435, 112.79475362523111], // will be used if the user denies location access
    tileLayer: {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    },
};

// Geolocation opsions for browser's navigaton API
export const geolocationOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};
