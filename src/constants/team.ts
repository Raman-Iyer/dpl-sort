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
    captain: "",
    viceCaptain: "",
    team: [],
    name: "Team 1",
    banner: "",
    teamIndex: 0,
  },
  {
    captain: "",
    viceCaptain: "",
    team: [],
    name: "Team 2",
    banner: "",
    teamIndex: 1,
  },
  {
    captain: "",
    viceCaptain: "",
    team: [],
    name: "Team 3",
    banner: "",
    teamIndex: 2,
  },
  {
    captain: "",
    viceCaptain: "",
    team: [],
    name: "Team 4",
    banner: "",
    teamIndex: 3,
  },
];

export const CAPTAINS: string[] = [
  "Prerana Poojary",
  "Sanket Bambulkar",
  "Harshit Shah",
  "Gunjan Gojiya",
  "Mohit Yadav",
  "Rupesh Chavan",
  "Akash Jain",
];

export const MEMBERS: string[] = [
  "Kushal Shinde",
  "Prerana Poojary",
  "Sanket Bambulkar",
  "Vandini Yadav",
  "Abhishek Porwal",
  "Sonika Shah",
  "Shailesh Parmar",
  "Sweta Agarwalla",
  "Shrushti Polekar",
  "Pranita Fulsundar",
  "Harshit Shah",
  "Sherin Saji",
  "Harsh Vador",
  "Dhruv Yadav",
  "Rushikesh Bunge",
  "Gunjan Gojiya",
  "Suman Maharana",
  "Mohit Yadav",
  "Sonal Wagh",
  "Yug shah",
  "Aashit Kothari",
  "Rupesh Chavan",
  "Kimberly Dsouza",
  "Akash Jain",
  "Nihar Doshi",
  "Siddhant Tripathi",
  "Harsh Soni",
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
