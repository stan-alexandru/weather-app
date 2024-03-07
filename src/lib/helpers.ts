import type {
	OpenWeatherGeoCoding,
	OpenWeatherGeoCodingApi,
	OpenWeatherOneCall,
	OpenWeatherOneCallApi,
	OpenWeatherReverseGeocodingApi,
} from '@/types';

export function getBrowserCoordinates() {
	const myPromise: Promise<GeolocationCoordinates> = new Promise(
		(resolve, reject) => {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(
					(position) => {
						if (position) {
							resolve(position.coords);
						}
					},
					(error) => reject(error),
				);
			} else {
				console.error('Geolocation is not supported by this browser.');
			}
		},
	);
	return myPromise;
}

export async function getOpenWeatherReverseGeolocation({
	lat,
	lon,
	limit = 5,
}: OpenWeatherReverseGeocodingApi): Promise<OpenWeatherGeoCoding[]> {
	const BASE_URL = 'http://api.openweathermap.org/geo/1.0/reverse';
	const url = new URL(BASE_URL);
	url.searchParams.set('lat', lat.toString());
	url.searchParams.set('lon', lon.toString());
	url.searchParams.set('limit', limit.toString());
	url.searchParams.set('appid', import.meta.env.VITE_API_KEY);

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				`Unable to fetch geocoding data ${(response.status, response.text)}`,
			);
		}
		const results = await response.json();
		return results as Promise<OpenWeatherGeoCoding[]>;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
export async function getOpenWeatherGeolocation({
	location,
	limit = 5,
}: OpenWeatherGeoCodingApi): Promise<OpenWeatherGeoCoding[]> {
	const BASE_URL = 'http://api.openweathermap.org/geo/1.0/direct';
	const url = new URL(BASE_URL);
	url.searchParams.set('q', location);
	url.searchParams.set('limit', limit.toString());
	url.searchParams.set('appid', import.meta.env.VITE_API_KEY);

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				`Unable to fetch geocoding data ${(response.status, response.text)}`,
			);
		}
		const results = await response.json();
		return results as Promise<OpenWeatherGeoCoding[]>;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
export async function callOpenWeatherOneCall({
	lat,
	lon,
	units = 'metric',
	lang = 'en',
	exclude,
}: OpenWeatherOneCallApi): Promise<OpenWeatherOneCall> {
	const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';
	const url = new URL(BASE_URL);
	url.searchParams.set('lat', lat.toString());
	url.searchParams.set('lon', lon.toString());
	url.searchParams.set('units', units);
	url.searchParams.set('lang', lang);
	exclude ? url.searchParams.set('exclude', exclude.join(',')) : null;
	url.searchParams.set('appid', import.meta.env.VITE_API_KEY);

	try {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				`Unable to fetch weather data ${(response.status, response.text)}`,
			);
		}
		const results = await response.json();

		return results as Promise<OpenWeatherOneCall>;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
