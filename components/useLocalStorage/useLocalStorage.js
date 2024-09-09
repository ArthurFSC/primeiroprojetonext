// components/useLocalStorage/useLocalStorage.js
import { useState, useEffect } from 'react';

/**
 * Custom hook that synchronizes state with localStorage.
 *
 * @param {string} key - The key in localStorage.
 * @param {any} initialValue - The initial value of the state.
 * @returns {[any, Function]} - The state and a setter function.
 */
export const useLocalStorage = (key, initialValue) => {
    // Ensure the initial value is always an array
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // Parse JSON or return initialValue if parsing fails
            return item ? JSON.parse(item) : Array.isArray(initialValue) ? initialValue : [];
        } catch (error) {
            console.error('Error getting localStorage value', error);
            return Array.isArray(initialValue) ? initialValue : [];
        }
    });

    // Update localStorage whenever the state changes
    useEffect(() => {
        try {
            window.localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error('Error setting localStorage value', error);
        }
    }, [key, storedValue]);

    return [storedValue, setStoredValue];
};
