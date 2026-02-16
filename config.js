/**
 * API configuration
 */
(function () {
    var PRODUCTION_API_URL = 'https://aicodebackend-production.up.railway.app'; // ✅ no slash

    var host = typeof window !== 'undefined' && window.location
        ? window.location.hostname
        : '';

    window.API_BASE = (host === 'localhost' || host === '127.0.0.1')
        ? 'http://localhost:8000'
        : PRODUCTION_API_URL;

    if (typeof window !== 'undefined' && !window.FIREBASE_CONFIG) {
        try {
            var rawCfg = localStorage.getItem('firebaseConfig');
            if (rawCfg) window.FIREBASE_CONFIG = JSON.parse(rawCfg);
        } catch (e) {}
    }
})();
