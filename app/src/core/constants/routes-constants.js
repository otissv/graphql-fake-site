// API routes
let domain;

if (window.app && window.app.domain) {
  domain = window.app.domain;
} else {
  domain = 'http://localhost:4000';
};

if (domain === 'http://localhost:4000') {
  console.warn(`API server is set to ${domain}.\nThis can be changed in services.json, domain`);
}

export const API_ROUTE = `${domain}/graphql`;
export const AUTH_ROUTE = `${domain}/auth`;


// Root route
export const ROOT_ROUTE = '/';
