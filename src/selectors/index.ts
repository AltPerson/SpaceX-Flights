import { heroSliderImages } from "@/contants";
import apolloClient, { GET_LOCATIONS } from "@/services/apollo-client";
import { RocketType } from "@/types";
import { selector } from "recoil";

export const toursQuery = selector({
	key: 'fetchedTours',
	get: async () => {
		const response = await apolloClient.query({
			query: GET_LOCATIONS,
			fetchPolicy: "network-only",
		});
		return response.data.rockets.map((rocket: Omit<RocketType, "img">, index: number) => ({ ...rocket, img: heroSliderImages[index >= 3 ? 0 : index] }));
	},
});