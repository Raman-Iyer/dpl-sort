const Teams = () => {
  const teamData = JSON.parse(localStorage.getItem("teams") || "");

  return (
    <div className="w-[100vw] h-[100vh] grid grid-cols-2 font-body">
      {teamData.map(({ banner, captain, name, viceCaptain, team }) => {
        return (
          <div className="w-full flex items-center border-2 gap-8 p-5">
            <img src={banner} alt="" className="w-52" />
            <div className="flex flex-col gap-2 h-full">
              <h1 className="text-5xl font-bold">{name}</h1>
              <h2 className="text-3xl font-bold">Captain: {captain}</h2>
              <h3 className="text-2xl font-bold">Flag Bearer: {viceCaptain}</h3>
              <p className="font-bold text-xl">Team: </p>
              <div>
                {team.map((playerName) => {
                  return <p>- {playerName}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Teams;
