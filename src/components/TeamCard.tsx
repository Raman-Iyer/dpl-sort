import { TeamCardProps } from "../interfaces/team";
import TeamSelectModal from "./modals/TeamSelectModal";
import ViceCaptainSelectModal from "./modals/ViceCaptainSelectModal";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const TeamCard = ({
  team,
  captainsPicked,
  teamSelect,
  viceCaptainsPicking,
  currentTeamIndex,
  teamIndex,
  handleSelectCaptain,
  handleSelectViceCaptain,
  handleSelectRandomPlayer,
  handleSelectTeam,
  captainList,
  membersList,
}: TeamCardProps) => {
  const handleButtonClick = () => {
    if (captainsPicked) {
      const selectedPlayer =
        membersList[Math.floor(Math.random() * membersList.length)];
      handleSelectRandomPlayer(teamIndex, selectedPlayer);
    } else {
      const selectedCaptain =
        captainList[Math.floor(Math.random() * captainList.length)];
      handleSelectCaptain(teamIndex, selectedCaptain);
    }
  };

  return (
    <Card className="flex flex-col justify-between">
      <div>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <h1 className="text-4xl font-bold font-heading">{team.name}</h1>
            <img src={team.banner} className="h-20" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-2xl mb-2">
            <span className="font-bold font font-heading">Captain:</span>{" "}
            {team.captain}
          </h3>
          <h4 className="text-xl mb-1">
            <span className="font-bold font-heading">Flag Bearer:</span>{" "}
            {team.viceCaptain}
          </h4>
          <p className="font-lg font-bold mb-2 font-heading">Team Members</p>
          <div className="grid grid-cols-3 gap-4">
            {team.team.map((player, index) => (
              <div
                key={index}
                className="text-center w-full py-1 px-2 rounded bg-gray-500"
              >
                {player}
              </div>
            ))}
          </div>
        </CardContent>
      </div>
      <CardFooter>
        {currentTeamIndex === teamIndex && membersList.length > 0 && (
          <div>
            {teamSelect && (
              <TeamSelectModal
                teamIndex={teamIndex}
                handleTeamSelect={handleSelectTeam}
              />
            )}
            {!teamSelect && viceCaptainsPicking && (
              <ViceCaptainSelectModal
                teamIndex={teamIndex}
                handleSelectViceCaptain={handleSelectViceCaptain}
                membersList={membersList}
              />
            )}
            {!teamSelect && !viceCaptainsPicking && (
              <Button onClick={handleButtonClick}>
                {captainsPicked ? "Choose Random" : "Choose Captain"}
              </Button>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
