// src/lib/apiKey.js

export const getApiKey = () => {
    return localStorage.getItem('apiKey');
 };
 
 export const setApiKey = (key) => {
    localStorage.setItem('apiKey', key);
 };