export interface TeamSelectModalProps {
  teamIndex: number;
  handleTeamSelect: (teamIndex: number, teamName: string) => void;
}

export interface ViceCaptainSelectModalProps {
  teamIndex: number;
  handleSelectViceCaptain: (teamIndex: number, viceCaptain: string) => void;
  membersList: string[];
}
