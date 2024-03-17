import type { OpenWeatherGeoCoding, OpenWeatherOneCall } from '@/types';
import { create } from 'zustand';

type State = {
	search: string;
	cityArray: OpenWeatherGeoCoding[] | undefined;
	weather: OpenWeatherOneCall | undefined;
	location: OpenWeatherGeoCoding | undefined;
};

type Action = {
	updateSearch: (search: State['search']) => void;
	updateCityArray: (cityArray: State['cityArray']) => void;
	updateWeather: (weather: State['weather']) => void;
	updateLocation: (location: State['location']) => void;
};

const useWeatherStore = create<State & Action>((set) => ({
	search: '',
	cityArray: undefined,
	weather: undefined,
	location: undefined,
	updateSearch: (search) => set(() => ({ search: search })),
	updateCityArray: (cityArray) => set(() => ({ cityArray: cityArray })),
	updateWeather: (weather) => set(() => ({ weather: weather })),
	updateLocation: (location) => set(() => ({ location: location })),
}));

export default useWeatherStore;
