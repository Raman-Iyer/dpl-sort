export interface Team {
  captain: { name: string; isRemote: boolean };
  viceCaptain: { name: string; isRemote: boolean };
  team: { name: string; isRemote: boolean }[];
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
  handleSelectCaptain: (
    teamIndex: number,
    captain: { name: string; isRemote: boolean }
  ) => void;
  handleSelectViceCaptain: (
    teamIndex: number,
    viceCaptain: { name: string; isRemote: boolean }
  ) => void;
  handleSelectRandomPlayer: (
    teamIndex: number,
    player: { name: string; isRemote: boolean }
  ) => void;
  handleSelectTeam: (teamIndex: number, teamName: string) => void;
  captainList: { name: string; isRemote: boolean }[];
  membersList: { name: string; isRemote: boolean }[];
}
