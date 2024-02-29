import { OpenWeatherGeoCoding, OpenWeatherOneCall } from '@/types';
import style from './Card.module.css';

export default function Card({
	weather,
	location,
}: {
	weather: OpenWeatherOneCall;
	location: OpenWeatherGeoCoding;
}) {
	const { current } = weather;
	const { name, country } = location;
	const date = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		hour: 'numeric',
		hour12: true,
		minute: '2-digit',
	}).format(1709158278);
	const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
		type: 'region',
	});

	return (
		<article className={style.card}>
			<div>
				<h1>
					{name}, {regionNamesInEnglish.of(country)}
				</h1>
				<h2>
					{date},{current?.weather[0]?.description}
				</h2>
			</div>
			<div className={style.wrapper}>
				<div>
					<h1>{current?.temp}°</h1>
					<p>Feels like {current?.feels_like}°</p>
				</div>
				<div>Icon</div>
			</div>

			<div className={style.bottom}>
				<h3>Humidity: {current?.humidity}%</h3>
				<h3>Wind: {current?.wind_speed}m/s</h3>
			</div>
		</article>
	);
}
