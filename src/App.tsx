import { useState } from 'react';
import type { OpenWeatherGeoCoding, OpenWeatherOneCall } from '@/types';
import {
	callOpenWeatherOneCall,
	getBrowserCoordinates,
	getOpenWeatherGeolocation,
	getOpenWeatherReverseGeolocation,
} from '@/lib/helpers';

function App() {
	const [search, setSearch] = useState<string>('');
	const [cityArray, setCityArray] = useState<OpenWeatherGeoCoding[]>();

	const [weather, setWeather] = useState<OpenWeatherOneCall>();
	const [location, setLocation] = useState<OpenWeatherGeoCoding>();

	async function handleForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const location = await getOpenWeatherGeolocation({ location: search });
		setCityArray(location);
	}
	async function handleCoordinates() {
		const coords = await getBrowserCoordinates();
		const geolocation = await getOpenWeatherReverseGeolocation({
			lat: coords.latitude,
			lon: coords.longitude,
		});
		const weather = await callOpenWeatherOneCall({
			lat: coords.latitude,
			lon: coords.longitude,
		});

		setWeather(weather);
		setLocation(geolocation[0]);
	}

	return (
		<>
			<form onSubmit={handleForm}>
				<button onClick={handleCoordinates} type='button'>
					Get Location
				</button>
				<input
					type='search'
					placeholder='Search'
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>
				<button type='submit'>Submit</button>
			</form>

			{location && weather && (
				<>
					<h1>{location?.name}</h1>
					<h1>{weather.lat}</h1>
					<h1>{weather.current?.feels_like}</h1>
				</>
			)}
		</>
	);
}

export default App;
