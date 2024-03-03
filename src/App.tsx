import { useState } from 'react';
import type { OpenWeatherGeoCoding, OpenWeatherOneCall } from '@/types';
import {
	callOpenWeatherOneCall,
	getBrowserCoordinates,
	getOpenWeatherGeolocation,
	getOpenWeatherReverseGeolocation,
} from '@/lib/helpers';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Card from '@/components/Card';

function App() {
	const [search, setSearch] = useState<string>('');
	const [cityArray, setCityArray] = useState<OpenWeatherGeoCoding[]>();
	console.log('🚀 ~ App ~ cityArray:', cityArray);

	const [weather, setWeather] = useState<OpenWeatherOneCall>();
	const [location, setLocation] = useState<OpenWeatherGeoCoding>();

	async function handleForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const location = await getOpenWeatherGeolocation({ location: search });
		setCityArray(location);
		setSearch('');
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
			<Navbar />
			<div className='container'>
				<Search
					handleCoordinates={handleCoordinates}
					handleForm={handleForm}
					search={search}
					setSearch={setSearch}
				/>
				{/* <form onSubmit={handleForm}>
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
			</form> */}
				{weather && location ? (
					<Card weather={weather} location={location} />
				) : undefined}
			</div>
		</>
	);
}

export default App;
