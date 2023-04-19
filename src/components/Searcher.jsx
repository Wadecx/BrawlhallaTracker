import React, { useEffect, useState } from "react";
import "../Assets/Searcher.css";
import Gif from "../Assets/Loading.gif";

const Searcher = (props) => {
  const [isFetch, setIsFetch] = useState(false);
  const apiUrl = `https://brawlhalla.fly.dev/v1/stats/id?brawlhalla_id=${props.Username}`;
  const [user, setUser] = useState({});
  const gloryUrl = `https://brawlhalla.fly.dev/v1/glory/id?brawlhalla_id=${props.Username}`;
  const [userElo, setUserElo] = useState({});
  const rankUrl = `https://brawlhalla.fly.dev/v1/ranked/id?brawlhalla_id=${props.Username}`;
  const [userRank, setUserRank] = useState({});

  const winPercentage = (user.wins / user.games) * 100;
  const res = Math.round(winPercentage * 100) / 100;

  const getData = async () => {
    const responseStats = await fetch(apiUrl).then((res) => res.json());
    setUser(responseStats.data);
    const responseGlory = await fetch(gloryUrl).then((res) => res.json());
    setUserElo(responseGlory.data);
    const responseRank = await fetch(rankUrl).then((res) => res.json());
    setUserRank(responseRank.data);

    if (responseStats && responseGlory && responseRank) {
      setIsFetch(true);
    }
  };

  useEffect(()=>
  {
    if(props.Username){

      getData();
    }
  }, [props.Username])

  setInterval(() => {
    getData();
  }, 600000);

  return (
    <>
      <div className="parentTab">
        <div className="generalTab">
          {isFetch ? (
            <>
              <h1 className="title">Stats Global</h1>
              <h2>Nom : {user.name}</h2>
              <h2>Level : {user.level}</h2>
              <h2>Clan : {user.clan.clan_name}</h2>
              <h2>Games Played : {user.games}</h2>
              <h2>Wins : {user.wins}</h2>
              <h2>Wins % : {user.wins}</h2>
            </>
          ) : (
            <div className="Loading">
              <h2>Veuillez renseigner votre ID</h2>
              <img alt="" src={Gif} />
            </div>
          )}
        </div>

        {isFetch && (
          <div className="rankedTab">
            <h1 className="title">Stats Ranked</h1>
            <h2>Current ELO : {userRank.rating}</h2>
            <h2>Rank : {userRank.tier}</h2>
            <h2>Region : {userRank.region}</h2>
            <h2>Season Wins : {userRank.wins}</h2>
            <h2>ELO Peek : {userElo.bestElo}</h2>
            <h2>ELO Reset : {userElo.eloReset}</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Searcher;
