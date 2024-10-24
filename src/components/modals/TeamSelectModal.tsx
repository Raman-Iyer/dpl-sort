import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useState } from "react";
import { TeamSelectModalProps } from "@/interfaces/modals";
import { Team } from "@/interfaces/team";
import { BANNERS } from "@/constants/team";

const TeamSelectModal = ({
  teamIndex,
  handleTeamSelect,
}: TeamSelectModalProps) => {
  const [team, setTeam] = useState<string>("");

  const teamsLs: Team[] = JSON.parse(localStorage.getItem("teams") || "");
  const selectedTeams = teamsLs
    .filter((team) => team.name !== "")
    .map((team) => team.name.slice(9));

  const teams = [
    { name: "Stark", sigil: BANNERS.stark },
    { name: "Baratheon", sigil: BANNERS.baratheon },
    { name: "Targaryen", sigil: BANNERS.targaryen },
    { name: "Arryn", sigil: BANNERS.arryn },
    { name: "Tully", sigil: BANNERS.tully },
    { name: "Lannister", sigil: BANNERS.lannister },
    { name: "Greyjoy", sigil: BANNERS.greyjoy },
    { name: "Martell", sigil: BANNERS.martell },
  ];

  const handleTeamChoose = () => {
    handleTeamSelect(teamIndex, team);
  };

  const handleTeamChange = (team: string) => {
    if (selectedTeams.includes(team)) {
      return;
    }
    setTeam(team);
  };

  return (
    <Dialog>
      <DialogTrigger className="font-body">
        <Button>Select House</Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-auto font-body">
        <DialogHeader>
          <DialogTitle className="font-heading">Choose your team</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-4 gap-4">
          {teams.map((teamItem) => (
            <div
              style={{
                backgroundImage: `url(${teamItem.sigil})`,
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.5)",
              }}
              className={`h-[150px] w-[150px] flex justify-center items-center rounded bg-cover font-bold font-heading ${
                team === teamItem.name
                  ? "border-white border-4"
                  : "border-[1px]"
              } ${
                selectedTeams.includes(teamItem.name)
                  ? "border-red-500 border-2 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
              onClick={() => handleTeamChange(teamItem.name)}
            >
              {teamItem.name}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleTeamChoose}>Select</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TeamSelectModal;
