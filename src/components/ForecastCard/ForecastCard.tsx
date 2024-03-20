import type { OpenWeatherOneCall } from '@/types';
import style from './ForecastCard.module.css';
import getWeatherIcon from '@/lib/getWeatherIcon';
import { Icon } from '@iconify/react';

export default function ForecastCard({
	weather,
}: {
	weather: OpenWeatherOneCall;
}) {
	const { daily } = weather;
	const UNIX_TIME_CONVERT = 1000;
	const time = new Intl.DateTimeFormat('en-US', {
		weekday: 'long',
	});
	return (
		<article className={style.card}>
			<ul>
				{daily.map((day) => (
					<li key={day.dt} className={style.li}>
						<p className={style.p}>{time.format(day.dt * UNIX_TIME_CONVERT)}</p>
						<Icon
							icon={getWeatherIcon(
								day.weather[0]?.id,
								day.dt,
								day.sunrise,
								day.sunset,
							)}
							width={48}
							height={48}
						/>
						<p className={style.p}>
							{day.temp.min}° / {day.temp.max}°
						</p>
					</li>
				))}
			</ul>
		</article>
	);
}
