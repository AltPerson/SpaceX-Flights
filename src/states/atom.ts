import { RocketType } from "@/types";
import { atom } from "recoil";

export const favoritesToursState = atom({
	key: "favoritesTours",
	default: [] as RocketType[],
});

export const mobileNavbarState = atom({
	key: "mobileNavbar",
	default: false as boolean,
})