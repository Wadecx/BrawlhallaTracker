import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import '../Assets/Searcher.css'

const Searcher = (props) => {

    const apiUrl = `https://brawlhalla.fly.dev/v1/stats/id?brawlhalla_id=${props.Username}`;
    const [user, setUser] = useState ({});
    const gloryUrl = `https://brawlhalla.fly.dev/v1/glory/id?brawlhalla_id=${props.Username}`
    const [userElo, setUserElo] = useState({});
    const rankUrl = `https://brawlhalla.fly.dev/v1/ranked/id?brawlhalla_id=${props.Username}`
    const [userRank, setUserRank] = useState({});


    const winPercentage = user.wins / user.games * 100;
    const res = Math.round(winPercentage * 100) / 100;


    const getData = async () =>
    {
      const responseStats = await fetch(apiUrl).then(res => res.json());
      setUser(responseStats.data);
      const responseGlory = await fetch(gloryUrl).then(res => res.json());
      setUserElo(responseGlory.data);
      const responseRank = await fetch(rankUrl).then(res => res.json());
      setUserRank(responseRank.data);
      console.log(responseRank.data)
    }

    console.log(user);

    useEffect(()=>
    {
      if(props.Username){
        getData();
      }
    }, [props.Username])

  return (
    <>
    <div className="parentTab">

      <div className="generalTab">
        <h1 className='title'>Statistiques Global</h1>
        {!user.name  ? (<h1>Pas de nom </h1>) : (<h1>Nom : {user.name}</h1>)}
        {!user.level ? (<h1>Non classé</h1>) : (<h1>Level : {user.level}</h1>)}
        {!user.clan ? (<h1>Pas de clan</h1>) : (<h1>Clan : {user.clan.clan_name}</h1>)}
        {!user.games ? (<h1>Pas de games</h1>) : (<h1> Parties Jouées : {user.games}</h1>)}
        {!user.wins ? (<h1>Pas de parties gagnées</h1>) : (<h1>Parties gagnées : {user.wins}</h1>)}
        {!user.name ? (<h1>Pas de % de Wins</h1>) : (<h1>Pourcentage de Wins : {res}  % </h1>)}
      </div>

      <div className="rankedTab">
        <h1 className='title'>Statistiques Ranked</h1>
        {!userRank ? (<h1>Pas de rating</h1>) : (<h1>Rating : {userRank.rating}</h1>)}
        {!userRank ? (<h1>Pas de Tier</h1>) : (<h1>Tier : {userRank.tier}</h1>)}
        {!userRank ? (<h1>Pas de Region</h1>) : (<h1>Region : {userRank.region}</h1>)}
        {!userRank ? (<h1>Pas de wins cette saison</h1>) : (<h1>Wins cette saison : {userRank.wins}</h1>)}
        {!userElo ? (<h1>Pas de Peek Elo</h1>) : (<h1>Meilleur Elo : {userElo.bestElo}</h1>)}
        {!userElo ? (<h1>Pas d'ÉLO Reset</h1>) : (<h1>ÉLO Reset : {userElo.eloReset}</h1>)}
        {!userElo.glory ? (<h1>Pas de Gain de Gloire</h1>) : (<h1>Gain de Gloire: {userElo.glory.rating}</h1>)}
      </div>
    </div>
    </>
  )
}

export default Searcher