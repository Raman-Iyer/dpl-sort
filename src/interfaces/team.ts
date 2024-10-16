export interface Team {
  captain: string;
  viceCaptain: string;
  team: string[];
  name: string;
  banner: string;
  teamIndex: number;
}

export interface TeamCardProps {
  team: Team;
  captainsPicked: boolean;
  teamSelect: boolean;
  viceCaptainsPicking: boolean;
  teamIndex: number;
  currentTeamIndex: number;
  handleSelectCaptain: (teamIndex: number, captain: string) => void;
  handleSelectViceCaptain: (teamIndex: number, viceCaptain: string) => void;
  handleSelectRandomPlayer: (teamIndex: number, player: string) => void;
  handleSelectTeam: (teamIndex: number, teamName: string) => void;
  captainList: string[];
  membersList: string[];
}
