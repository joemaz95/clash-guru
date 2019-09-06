const api_key = 'RGAPI-641263e8-6160-4975-974f-d93895e8183a'; //these expire every 24 hours, so I'm not worried if someone on github steals it :D

//manage async api calls
export function getSummonerInfo(summonerName,summonerNumberObject, handler, checkState){
	var finalObject = {};
	const summ = fetch('https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+summonerName+'?api_key='+api_key)
		     .then(function(result){return result.json();})
		     .then(function(summonerJson){
				fetch('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+summonerJson['id']+'?api_key='+api_key)
		      		.then(function(result){return result.json();})
		      		.then(function(rankJson){
					fetch('https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+summonerJson['id']+'?api_key='+api_key)
		      			.then(function(result){return result.json();})
		      			.then(function(masteryJson){finalObject = {'summonerJson':summonerJson,
									      	   'rankJson': rankJson,
									           'masteryJson': masteryJson
										   };
								    console.log(finalObject);
								    handler(summonerNumberObject, finalObject);
								    return finalObject;
					});				
				});
		     });
	return finalObject;
	
}

export function getSummonerRanks(summonerObject){
	const ranks = fetch('https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+summonerObject['id']+'?api_key='+api_key)
		      .then(function(result){return result.json();})
		      .then(function(myJson){console.log(JSON.stringify(myJson));});
}

export function getHighestMastery(summonerObject){
	const champsByMastery = fetch('https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/'+summonerObject['id']+'?api_key='+api_key)
		      .then(function(result){return result.json();})
		      .then(function(myJson){console.log(JSON.stringify(myJson));});
}


