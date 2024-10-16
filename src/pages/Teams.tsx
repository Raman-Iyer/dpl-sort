const Teams = () => {
  const teamData = JSON.parse(localStorage.getItem("teams") || "");

  return (
    <div className="w-[100vw] h-[100vh] grid grid-cols-2">
      <div className="w-full flex items-center border-2 justify-between p-5">
        <img src={teamData[0].banner} alt="" className="w-60" />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{teamData[0].name}</h1>
          <h2 className="text-3xl font-bold">Captain: {teamData[0].captain}</h2>
          <h3 className="text-2xl font-bold">
            Flag Bearer: {teamData[0].viceCaptain}
          </h3>
          <p className="font-bold text-xl">Team: </p>
          <div>
            {teamData[0].team.map((name) => {
              return <p>- {name}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center border-2 justify-between p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{teamData[1].name}</h1>
          <h2 className="text-3xl font-bold">Captain: {teamData[1].captain}</h2>
          <h3 className="text-2xl font-bold">
            Flag Bearer: {teamData[1].viceCaptain}
          </h3>
          <p className="font-bold text-xl">Team: </p>
          <div>
            {teamData[1].team.map((name) => {
              return <p>- {name}</p>;
            })}
          </div>
        </div>
        <img src={teamData[1].banner} alt="" className="w-60" />
      </div>
      <div className="w-full flex items-center border-2 justify-between p-5">
        <img src={teamData[2].banner} alt="" className="w-60" />
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{teamData[2].name}</h1>
          <h2 className="text-3xl font-bold">Captain: {teamData[2].captain}</h2>
          <h3 className="text-2xl font-bold">
            Flag Bearer: {teamData[2].viceCaptain}
          </h3>
          <p className="font-bold text-xl">Team: </p>
          <div>
            {teamData[2].team.map((name) => {
              return <p>- {name}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex items-center border-2 justify-between p-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl font-bold">{teamData[3].name}</h1>
          <h2 className="text-3xl font-bold">Captain: {teamData[3].captain}</h2>
          <h3 className="text-2xl font-bold">
            Flag Bearer: {teamData[3].viceCaptain}
          </h3>
          <p className="font-bold text-xl">Team: </p>
          <div>
            {teamData[3].team.map((name) => {
              return <p>- {name}</p>;
            })}
          </div>
        </div>
        <img src={teamData[3].banner} alt="" className="w-60" />
      </div>
    </div>
  );
};

export default Teams;
