// File: getClient.js
window.sanityClient = null;

// Inisialisasi sanityClient
const client = require('@sanity/client');
const { config } = require('./config');

window.sanityClient = client(config);

