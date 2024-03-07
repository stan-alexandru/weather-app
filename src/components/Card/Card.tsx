import { OpenWeatherGeoCoding, OpenWeatherOneCall } from '@/types';
import getWeatherIcon from '@/lib/getWeatherIcon';
import style from './Card.module.css';
import { Icon } from '@iconify/react';
export default function Card({
	weather,
	location,
}: {
	weather: OpenWeatherOneCall;
	location: OpenWeatherGeoCoding;
}) {
	const { current, timezone_offset } = weather;
	const UNIX_TIME_CONVERT = 1000;

	const icon = getWeatherIcon(
		current?.weather[0]?.id,
		current?.dt,
		current?.sunrise,
		current?.sunset,
	);
	const date = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
		hour: 'numeric',
		hour12: true,
		minute: '2-digit',
	});
	const { name, country } = location;
	const regionNamesInEnglish = new Intl.DisplayNames(['en'], {
		type: 'region',
	});
	const time = current?.dt * UNIX_TIME_CONVERT;
	return (
		<article className={style.card}>
			<div className={style.title}>
				<h1>
					{name}, {regionNamesInEnglish.of(country)}
				</h1>
				<p>
					{date.format(time)},{current?.weather[0]?.description}
				</p>
			</div>
			<div className={style.wrapper}>
				<div>
					<h1>{current?.temp}°</h1>
					<p>Feels like {current?.feels_like}°</p>
				</div>
				<div>
					<Icon icon={icon} width={96} height={96} />
				</div>
			</div>

			<div className={style.bottom}>
				<p>Humidity: {current?.humidity}%</p>
				<p>Wind: {current?.wind_speed}m/s</p>
			</div>
		</article>
	);
}
