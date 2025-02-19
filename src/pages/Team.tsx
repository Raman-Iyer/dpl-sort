import { useEffect, useState } from "react";
import { BANNERS, CAPTAINS, DEFAULT_TEAMS, MEMBERS } from "../constants/team";
import { Team as TeamType } from "../interfaces/team";
import TeamCard from "../components/TeamCard";
import { difference } from "lodash";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const savedTeams = JSON.parse(localStorage.getItem("teams") || "{}");
  const savedCurrentTeamIndex = parseInt(
    localStorage.getItem("currentTeamIndex") || "0"
  );

  const navigate = useNavigate();
  const [currentTeamIndex, setCurrentTeamIndex] = useState(
    savedCurrentTeamIndex
  );
  const [teams, setTeams] = useState<TeamType[]>(
    Object.keys(savedTeams).length === 0 ? DEFAULT_TEAMS : savedTeams
  );
  const [captainsPicked, setCaptainsPicked] = useState(false);
  const [teamSelect, setTeamSelect] = useState(
    teams[currentTeamIndex].captain.name !== "" &&
      teams[currentTeamIndex].name.includes("Team")
  );
  const [viceCaptainsPicking, setViceCaptainsPicking] = useState(
    teams[currentTeamIndex].captain.name !== "" &&
      !teams[currentTeamIndex].name.includes("Team")
  );

  useEffect(() => {
    setCaptainsPicked(
      teams.filter((team) => team.captain.name === "").length === 0
    );
  }, [teams]);

  useEffect(() => {
    setViceCaptainsPicking(
      captainsPicked &&
        teams.filter((team) => team.viceCaptain.name === "").length > 0
    );
  }, [teams, captainsPicked]);

  const handleSelectCaptain = (
    teamIndex: number,
    captain: { name: string; isRemote: boolean }
  ) => {
    const updatedTeams = teams.map((team) => {
      if (team.teamIndex === teamIndex) {
        return {
          ...team,
          captain,
        };
      } else {
        return team;
      }
    });

    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
    setTeamSelect(true);
  };

  const handleSelectTeam = (teamIndex: number, name: string) => {
    setTeamSelect(false);
    const updatedTeams = teams.map((team) => {
      if (team.teamIndex === teamIndex) {
        return {
          ...team,
          name: `House of ${name}`,
          banner: BANNERS[name.toLowerCase()],
        };
      } else {
        return team;
      }
    });

    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
    const updatedTeamIndex = teamIndex === 3 ? 0 : teamIndex + 1;
    setCurrentTeamIndex(updatedTeamIndex);
    localStorage.setItem("currentTeamIndex", updatedTeamIndex.toString());
  };

  const handleSelectViceCaptain = (
    teamIndex: number,
    viceCaptain: { name: string; isRemote: boolean }
  ) => {
    const updatedTeams = teams.map((team) => {
      if (team.teamIndex === teamIndex) {
        return {
          ...team,
          viceCaptain,
        };
      } else {
        return team;
      }
    });

    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
    const updatedTeamIndex = teamIndex === 3 ? 0 : teamIndex + 1;
    setCurrentTeamIndex(updatedTeamIndex);
    localStorage.setItem("currentTeamIndex", updatedTeamIndex.toString());
  };

  const handleSelectRandomPlayer = (
    teamIndex: number,
    player: { name: string; isRemote: boolean }
  ) => {
    const updatedTeams = teams.map((team) => {
      if (team.teamIndex === teamIndex) {
        return {
          ...team,
          team: [...team.team, player],
        };
      } else {
        return team;
      }
    });

    setTeams(updatedTeams);
    localStorage.setItem("teams", JSON.stringify(updatedTeams));
    const updatedTeamIndex = teamIndex === 3 ? 0 : teamIndex + 1;
    setCurrentTeamIndex(updatedTeamIndex);
    localStorage.setItem("currentTeamIndex", updatedTeamIndex.toString());
  };

  const getCaptainList = () => {
    const diff = difference(
      CAPTAINS.map((captain) => captain.name),
      teams
        .filter((team) => team.captain.name !== "")
        .map((team) => team.captain.name)
    );

    return CAPTAINS.filter((captain) => diff.includes(captain.name));
  };

  const getMembersList = () => {
    const selectedMembers = teams.reduce((members, team) => {
      if (team.captain.name !== "") {
        members.push(team.captain.name);
        if (team.viceCaptain.name !== "") {
          members.push(team.viceCaptain.name);
        }
        members.push(...team.team.map((player) => player.name));
      }

      return members;
    }, [] as string[]);

    const diff = difference(
      MEMBERS.map((member) => member.name),
      selectedMembers
    );
    return MEMBERS.filter((member) => diff.includes(member.name));
  };

  const handleViewTeams = () => {
    navigate("/teams");
  };

  return (
    <div className="h-full w-full flex font-body">
      <div className="grid grid-cols-2 gap-2 p-2 h-full w-full">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            captainsPicked={captainsPicked}
            teamSelect={teamSelect}
            viceCaptainsPicking={viceCaptainsPicking}
            currentTeamIndex={currentTeamIndex}
            teamIndex={index}
            team={team}
            handleSelectCaptain={handleSelectCaptain}
            handleSelectViceCaptain={handleSelectViceCaptain}
            handleSelectRandomPlayer={handleSelectRandomPlayer}
            handleSelectTeam={handleSelectTeam}
            captainList={getCaptainList()}
            membersList={getMembersList()}
          />
        ))}
      </div>
      <Card className="min-w-[300px] m-2">
        <CardHeader>
          <CardTitle className="text-2xl font-heading">Player List</CardTitle>
          <CardContent className="overflow-y-auto h-[87vh]">
            {getMembersList().length === 0 ? (
              <div className="w-full h-full flex justify-center items-center">
                <Button onClick={handleViewTeams}>View Teams</Button>
              </div>
            ) : (
              <div>
                {getMembersList().map((member, index) => {
                  return <p key={index}>{member.name}</p>;
                })}
              </div>
            )}
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Team;
