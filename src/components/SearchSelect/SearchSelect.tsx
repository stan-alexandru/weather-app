import style from './SearchSelect.module.css';
import type { OpenWeatherGeoCoding } from '@/types';
import { Icon } from '@iconify/react';
import { callOpenWeatherOneCall } from '@/lib/helpers';
import useWeatherStore from '@/lib/store';

export default function SearchSelect({
	array,
}: {
	array: OpenWeatherGeoCoding[];
}) {
	return (
		<>
			<ul className={style.selectList}>
				{array.map((city, index) => (
					<SearchItem {...city} key={city.lat + city.lon + index} />
				))}
			</ul>
		</>
	);
}

function SearchItem(props: OpenWeatherGeoCoding) {
	const updateWeather = useWeatherStore((state) => state.updateWeather);
	const updateLocation = useWeatherStore((state) => state.updateLocation);
	const updateSearch = useWeatherStore((state) => state.updateSearch);
	const updateCityArray = useWeatherStore((state) => state.updateCityArray);
	const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
		type: 'region',
	});
	async function handleClick(lat: number, lon: number) {
		const city = await callOpenWeatherOneCall({ lat, lon });
		updateWeather(city);
		updateLocation(props);
		updateCityArray([]);
		updateSearch('');
	}
	return (
		<li className={style.li}>
			<button
				type='button'
				onClick={() => handleClick(props.lat, props.lon)}
				className={style.button}
			>
				<h1 className={style.city}>
					{props.state ? `${props.name},${props.state}` : `${props.name}`}
				</h1>
				<p className={style.country}>
					<Icon
						icon={`cif:${props.country.toLocaleLowerCase()}`}
						width={32}
						height={32}
					/>
					{regionNamesInEnglish.of(props.country)}
				</p>
			</button>
		</li>
	);
}
