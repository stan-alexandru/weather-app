export interface Location {
	lat: number;
	lon: number;
}
export interface OpenWeatherOneCallApi {
	lat: number;
	lon: number;
	exclude?: ('current' | 'minutely' | 'hourly' | 'daily' | 'alerts')[];
	units?: 'standard' | 'metric' | 'imperial';
	lang?: string;
}
export interface OpenWeatherGeoCodingApi {
	location: string;
	limit?: number;
}
export interface OpenWeatherReverseGeocodingApi {
	lat: number;
	lon: number;
	limit?: number;
}
export interface OpenWeatherGeoCoding {
	name: string;
	local_names: {
		ascii: string;
		feature_name: string;
		[key: string]: string;
	};
	lat: number;
	lon: number;
	country: string;
	state?: string;
}
export interface OpenWeatherOneCall {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current?: {
		dt: number;
		sunrise: number;
		sunset: number;
		temp: number;
		feels_like: number;
		pressure: number;
		humidity: number;
		dew_point: number;
		clouds: number;
		uvi: number;
		visibility: number;
		wind_speed: number;
		wind_gust?: number;
		wind_deg: number;
		rain?: number;
		snow?: number;
		weather: {
			id: number;
			main: string;
			description: string;
			icon: string;
		}[];
	};
	hourly?: {
		dt: number;
		temp: number;
		feels_like: number;
		pressure: number;
		humidity: number;
		dew_point: number;
		uvi: number;
		clouds: number;
		visibility: number;
		wind_speed: number;
		wind_gust?: number;
		wind_deg: number;
		pop: number;
		rain?: number;
		snow?: number;
		weather: {
			id: number;
			main: string;
			description: string;
			icon: string;
		}[];
	}[];
	daily?: {
		dt: number;
		sunrise: number;
		sunset: number;
		moonrise: number;
		moonset: number;
		moon_phase: number;
		summary: string;
		temp: {
			morn: number;
			day: number;
			eve: number;
			night: number;
			min: number;
			max: number;
		};
		feels_like: {
			morn: number;
			day: number;
			eve: number;
			night: number;
		};
		pressure: number;
		humidity: number;
		dew_point: number;
		wind_speed: number;
		wind_gust?: number;
		wind_deg: number;
		clouds: number;
		uvi: number;
		pop: number;
		rain?: number;
		snow?: number;
		weather: {
			id: number;
			main: string;
			description: string;
			icon: string;
		}[];
	}[];
	minutely?: {
		dt: number;
		precipitation: number;
	}[];
	alerts?: {
		sender_name: string;
		event: string;
		start: number;
		end: number;
		description: number;
		tags: string[];
	}[];
}
