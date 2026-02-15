/**
 * API configuration - update PRODUCTION_API_URL before deploying
 * Local: uses localhost:8000
 * Production: uses PRODUCTION_API_URL (edit below)
 */
(function () {
    var PRODUCTION_API_URL = 'https://your-backend.up.railway.app'; // EDIT: your Railway/Render URL
    var host = typeof window !== 'undefined' && window.location ? window.location.hostname : '';
    window.API_BASE = (host === 'localhost' || host === '127.0.0.1')
        ? 'http://localhost:8000'
        : PRODUCTION_API_URL;
})();
