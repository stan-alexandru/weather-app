export default function getWeatherIcon(
	id: number = 804,
	unixTime: number,
	sunRise: number,
	sunSet: number,
): string {
	const timeOfDay = unixTime < sunRise || unixTime > sunSet ? 'night' : 'day';
	if (timeOfDay === 'day') {
		switch (id) {
			case 200:
				return 'wi:day-thunderstorm';
			case 201:
				return 'wi:day-thunderstorm';
			case 202:
				return 'wi:day-thunderstorm';
			case 210:
				return 'wi:day-lightning';
			case 211:
				return 'wi:day-lightning';
			case 212:
				return 'wi:day-lightning';
			case 221:
				return 'wi:day-lightning';
			case 230:
				return 'wi:day-thunderstorm';
			case 231:
				return 'wi:day-thunderstorm';
			case 232:
				return 'wi:day-thunderstorm';
			case 300:
				return 'wi:day-sprinkle';
			case 301:
				return 'wi:day-sprinkle';
			case 302:
				return 'wi:day-rain';
			case 310:
				return 'wi:day-rain';
			case 311:
				return 'wi:day-rain';
			case 312:
				return 'wi:day-rain';
			case 313:
				return 'wi:day-rain';
			case 314:
				return 'wi:day-rain';
			case 321:
				return 'wi:day-sprinkle';
			case 500:
				return 'wi:day-sprinkle';
			case 501:
				return 'wi:day-rain';
			case 502:
				return 'wi:day-rain';
			case 503:
				return 'wi:day-rain';
			case 504:
				return 'wi:day-rain';
			case 511:
				return 'wi:day-rain-mix';
			case 520:
				return 'wi:day-showers';
			case 521:
				return 'wi:day-showers';
			case 522:
				return 'wi:day-showers';
			case 531:
				return 'wi:day-storm-showers';
			case 600:
				return 'wi:day-snow';
			case 601:
				return 'wi:day-sleet';
			case 602:
				return 'wi:day-snow';
			case 611:
				return 'wi:day-rain-mix';
			case 612:
				return 'wi:day-rain-mix';
			case 615:
				return 'wi:day-rain-mix';
			case 616:
				return 'wi:day-rain-mix';
			case 620:
				return 'wi:day-rain-mix';
			case 621:
				return 'wi:day-snow';
			case 622:
				return 'wi:day-snow';
			case 701:
				return 'wi:day-showers';
			case 711:
				return 'wi:smoke';
			case 721:
				return 'wi:day-haze';
			case 731:
				return 'wi:dust';
			case 741:
				return 'wi:day-fog';
			case 751:
				return 'wi:day-cloudy-gusts';
			case 761:
				return 'wi:dust';
			case 762:
				return 'wi:dust';
			case 771:
				return 'wi:day-cloudy-gusts';
			case 781:
				return 'wi:tornado';
			case 800:
				return 'wi:day-sunny';
			case 801:
				return 'wi:day-cloudy-gusts';
			case 802:
				return 'wi:day-cloudy-gusts';
			case 803:
				return 'wi:day-cloudy-gusts';
			case 804:
				return 'wi:day-sunny-overcast';
			case 900:
				return 'wi:tornado';
			case 901:
				return 'wi:day-storm-showers';
			case 902:
				return 'wi:hurricane';
			case 903:
				return 'wi:snowflake-cold';
			case 904:
				return 'wi:hot';
			case 905:
				return 'wi:day-windy';
			case 906:
				return 'wi:day-hail';
			case 951:
				return 'wi:day-sunny';
			case 952:
				return 'wi:day-cloudy-gusts';
			case 953:
				return 'wi:day-cloudy-gusts';
			case 954:
				return 'wi:day-cloudy-gusts';
			case 955:
				return 'wi:day-cloudy-gusts';
			case 956:
				return 'wi:day-cloudy-gusts';
			case 957:
				return 'wi:strong-wind';
			case 958:
				return 'wi:day-cloudy-gusts';
			case 959:
				return 'wi:day-cloudy-gusts';
			case 960:
				return 'wi:day-thunderstorm';
			case 961:
				return 'wi:day-thunderstorm';
			case 962:
				return 'wi:day-cloudy-gusts';
			default:
				return 'wi:day-sunny';
		}
	}
	if (timeOfDay === 'night') {
		switch (id) {
			case 200:
				return 'wi:night-alt-thunderstorm';
			case 201:
				return 'wi:night-alt-thunderstorm';
			case 202:
				return 'wi:night-alt-thunderstorm';
			case 210:
				return 'wi:night-alt-lightning';
			case 211:
				return 'wi:night-alt-lightning';
			case 212:
				return 'wi:night-alt-lightning';
			case 221:
				return 'wi:night-alt-lightning';
			case 230:
				return 'wi:night-alt-thunderstorm';
			case 231:
				return 'wi:night-alt-thunderstorm';
			case 232:
				return 'wi:night-alt-thunderstorm';
			case 300:
				return 'wi:night-alt-sprinkle';
			case 301:
				return 'wi:night-alt-sprinkle';
			case 302:
				return 'wi:night-alt-sprinkle';
			case 310:
				return 'wi:night-alt-rain';
			case 311:
				return 'wi:night-alt-rain';
			case 312:
				return 'wi:night-alt-rain';
			case 313:
				return 'wi:night-alt-rain';
			case 314:
				return 'wi:night-alt-rain';
			case 321:
				return 'wi:night-alt-sprinkle';
			case 500:
				return 'wi:night-alt-sprinkle';
			case 501:
				return 'wi:night-alt-rain';
			case 502:
				return 'wi:night-alt-rain';
			case 503:
				return 'wi:night-alt-rain';
			case 504:
				return 'wi:night-alt-rain';
			case 511:
				return 'wi:night-alt-rain-mix';
			case 520:
				return 'wi:night-alt-showers';
			case 521:
				return 'wi:night-alt-showers';
			case 522:
				return 'wi:night-alt-showers';
			case 531:
				return 'wi:night-alt-storm-showers';
			case 600:
				return 'wi:night-alt-snow';
			case 601:
				return 'wi:night-alt-sleet';
			case 602:
				return 'wi:day-snow';
			case 611:
				return 'wi:night-alt-snow';
			case 612:
				return 'wi:night-alt-rain-mix';
			case 615:
				return 'wi:night-alt-rain-mix';
			case 616:
				return 'wi:night-alt-rain-mix';
			case 620:
				return 'wi:night-alt-rain-mix';
			case 621:
				return 'wi:night-alt-snow';
			case 622:
				return 'wi:night-alt-snow';
			case 701:
				return 'wi:night-alt-showers';
			case 711:
				return 'wi:smoke';
			case 721:
				return 'wi:day-haze';
			case 731:
				return 'wi:dust';
			case 741:
				return 'wi:night-fog';
			case 751:
				return 'wi:night-alt-cloudy-gusts';
			case 761:
				return 'wi:dust';
			case 762:
				return 'wi:dust';
			case 771:
				return 'wi:night-alt-cloudy-gusts';
			case 781:
				return 'wi:tornado';
			case 800:
				return 'wi:night-clear';
			case 801:
				return 'wi:night-alt-cloudy-gusts';
			case 802:
				return 'wi:night-alt-cloudy-gusts';
			case 803:
				return 'wi:night-alt-cloudy-gusts';
			case 804:
				return 'wi:night-alt-cloudy';
			case 900:
				return 'wi:tornado';
			case 901:
				return 'wi:night-alt-storm-showers';
			case 902:
				return 'wi:hurricane';
			case 903:
				return 'wi:snowflake-cold';
			case 904:
				return 'wi:hot';
			case 905:
				return 'wi:night-alt-cloudy';
			case 906:
				return 'wi:night-alt-hail';
			case 951:
				return 'wi:night-clear';
			case 952:
				return 'wi:night-alt-cloudy-gusts';
			case 953:
				return 'wi:night-alt-cloudy-gusts';
			case 954:
				return 'wi:night-alt-cloudy-gusts';
			case 955:
				return 'wi:night-alt-cloudy-gusts';
			case 956:
				return 'wi:night-alt-cloudy-gusts';
			case 957:
				return 'wi:strong-wind';
			case 958:
				return 'wi:night-alt-cloudy-gusts';
			case 959:
				return 'wi:night-alt-cloudy-gusts';
			case 960:
				return 'wi:night-alt-thunderstorm';
			case 961:
				return 'wi:night-alt-thunderstorm';
			case 962:
				return 'wi:night-alt-cloudy-gusts';
			default:
				return 'wi:moon-alt-new';
		}
	}
	return 'wi-cloud';
}
