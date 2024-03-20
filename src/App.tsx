import {
	callOpenWeatherOneCall,
	getBrowserCoordinates,
	getOpenWeatherGeolocation,
	getOpenWeatherReverseGeolocation,
} from '@/lib/helpers';
import Navbar from '@/components/Navbar';
import Search from '@/components/Search';
import Card from '@/components/Card';
import ForecastCard from '@/components/ForecastCard';
import useWeatherStore from '@/lib/store';
import SearchSelect from '@/components/SearchSelect';

function App() {
	const location = useWeatherStore((state) => state.location);
	const weather = useWeatherStore((state) => state.weather);
	const cityArray = useWeatherStore((state) => state.cityArray);
	const search = useWeatherStore((state) => state.search);
	const updateCityArray = useWeatherStore((state) => state.updateCityArray);

	const updateWeather = useWeatherStore((state) => state.updateWeather);
	const updateLocation = useWeatherStore((state) => state.updateLocation);

	async function handleForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const location = await getOpenWeatherGeolocation({ location: search });
		updateCityArray(location);
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

		updateWeather(weather);
		updateLocation(geolocation[0]);
	}

	return (
		<>
			<Navbar />
			<div className='container'>
				<Search handleCoordinates={handleCoordinates} handleForm={handleForm} />
				{cityArray && (
					<SearchSelect array={cityArray} />
					// <ul>
					// 	{cityArray.map((city, index) => (
					// 		<SearchItem {...city} key={city.lat + city.lon + index} />
					// 	))}
					// </ul>
				)}
				{weather && location ? (
					<Card weather={weather} location={location} />
				) : undefined}
				{weather && location ? <ForecastCard weather={weather} /> : undefined}
			</div>
		</>
	);
}

export default App;
