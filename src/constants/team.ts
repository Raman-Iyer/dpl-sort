import { Team } from "../interfaces/team";
import starkSigil from "../assets/house_arts/sigil_stark.webp";
import baratheonSigil from "../assets/house_arts/sigil_baratheon.webp";
import targaryenSigil from "../assets/house_arts/sigil_targaryen.webp";
import arrynSigil from "../assets/house_arts/sigil_arryn.webp";
import tullySigil from "../assets/house_arts/sigil_tully.webp";
import lannisterSigil from "../assets/house_arts/sigil_lannister.webp";
import greyjoySigil from "../assets/house_arts/sigil_greyjoy.webp";
import martellSigil from "../assets/house_arts/sigil_martell.webp";

export const DEFAULT_TEAMS: Team[] = [
  {
    captain: { name: "", isRemote: false },
    viceCaptain: { name: "", isRemote: false },
    team: [],
    name: "Team 1",
    banner: "",
    teamIndex: 0,
  },
  {
    captain: { name: "", isRemote: false },
    viceCaptain: { name: "", isRemote: false },
    team: [],
    name: "Team 2",
    banner: "",
    teamIndex: 1,
  },
  {
    captain: { name: "", isRemote: false },
    viceCaptain: { name: "", isRemote: false },
    team: [],
    name: "Team 3",
    banner: "",
    teamIndex: 2,
  },
  {
    captain: { name: "", isRemote: false },
    viceCaptain: { name: "", isRemote: false },
    team: [],
    name: "Team 4",
    banner: "",
    teamIndex: 3,
  },
];

export const CAPTAINS: { name: string; isRemote: boolean }[] = [
  { name: "Prerana Poojary", isRemote: false },
  { name: "Sanket Bambulkar", isRemote: false },
  { name: "Harshit Shah", isRemote: false },
  { name: "Gunjan Gojiya", isRemote: true },
  { name: "Rupesh Chavan", isRemote: false },
  { name: "Akash Jain", isRemote: false },
  { name: "Harsh Vador", isRemote: false },
];

export const MEMBERS: { name: string; isRemote: boolean }[] = [
  { name: "Kushal Shinde", isRemote: false },
  { name: "Prerana Poojary", isRemote: false },
  { name: "Sanket Bambulkar", isRemote: false },
  { name: "Vandini Yadav", isRemote: false },
  { name: "Abhishek Porwal", isRemote: true },
  { name: "Sonika Shah", isRemote: true },
  { name: "Shailesh Parmar", isRemote: false },
  { name: "Sweta Agarwalla", isRemote: true },
  { name: "Shrushti Polekar", isRemote: true },
  { name: "Pranita Fulsundar", isRemote: true },
  { name: "Harshit Shah", isRemote: false },
  { name: "Harsh Vador", isRemote: false },
  { name: "Dhruv Yadav", isRemote: true },
  { name: "Rushikesh Bunge", isRemote: true },
  { name: "Gunjan Gojiya", isRemote: true },
  { name: "Suman Maharana", isRemote: true },
  { name: "Mohit Yadav", isRemote: true },
  { name: "Sonal Wagh", isRemote: false },
  { name: "Yug shah", isRemote: false },
  { name: "Aashit Kothari", isRemote: true },
  { name: "Rupesh Chavan", isRemote: false },
  { name: "Kimberly Dsouza", isRemote: false },
  { name: "Akash Jain", isRemote: false },
  { name: "Nihar Doshi", isRemote: false },
  { name: "Siddhant Tripathi", isRemote: true },
  { name: "Harsh Soni", isRemote: true },
];

export const BANNERS: { [key: string]: string } = {
  stark: starkSigil,
  baratheon: baratheonSigil,
  targaryen: targaryenSigil,
  arryn: arrynSigil,
  tully: tullySigil,
  lannister: lannisterSigil,
  greyjoy: greyjoySigil,
  martell: martellSigil,
};
