import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

var championDict = {Aatrox       : 266,
    Ahri         : 103,
    Akali        : 84,
    Alistar      : 12,
    Amumu        : 32,
    Anivia       : 34,
    Annie        : 1,
    Ashe         : 22,
    AurelionSol  : 136,
    Azir         : 268,
    Bard         : 432,
    Blitzcrank   : 53,
    Brand        : 63,
    Braum        : 201,
    Caitlyn      : 51,
    Camille      : 164,
    Cassiopeia   : 69,
    ChoGath      : 31,
    Corki        : 42,
    Darius       : 122,
    Diana        : 131,
    DrMundo      : 36,
    Draven       : 119,
    Ekko         : 245,
    Elise        : 60,
    Evelynn      : 28,
    Ezreal       : 81,
    Fiddlesticks : 9,
    Fiora        : 114,
    Fizz         : 105,
    Galio        : 3,
    Gangplank    : 41,
    Garen        : 86,
    Gnar         : 150,
    Gragas       : 79,
    Graves       : 104,
    Hecarim      : 120,
    Heimerdinger : 74,
    Illaoi       : 420,
    Irelia       : 39,
    Ivern        : 427,
    Janna        : 40,
    JarvanIV     : 59,
    Jax          : 24,
    Jayce        : 126,
    Jhin         : 202,
    Jinx         : 222,
    Kalista      : 429,
    Karma        : 43,
    Karthus      : 30,
    Kassadin     : 38,
    Katarina     : 55,
    Kayle        : 10,
    Kayn         : 141,
    Kennen       : 85,
    KhaZix       : 121,
    Kindred      : 203,
    Kled         : 240,
    KogMaw       : 96,
    LeBlanc      : 7,
    LeeSin       : 64,
    Leona        : 89,
    Lissandra    : 127,
    Lucian       : 236,
    Lulu         : 117,
    Lux          : 99,
    Malphite     : 54,
    Malzahar     : 90,
    Maokai       : 57,
    MasterYi     : 11,
    MissFortune  : 21,
    Mordekaiser  : 82,
    Morgana      : 25,
    Nami         : 267,
    Nasus        : 75,
    Nautilus     : 111,
    Nidalee      : 76,
    Nocturne     : 56,
    Nunu         : 20,
    Olaf         : 2,
    Orianna      : 61,
    Ornn         : 516,
    Pantheon     : 80,
    Poppy        : 78,
    Quinn        : 133,
    Rakan        : 497,
    Rammus       : 33,
    RekSai       : 421,
    Renekton     : 58,
    Rengar       : 107,
    Riven        : 92,
    Rumble       : 68,
    Ryze         : 13,
    Sejuani      : 113,
    Shaco        : 35,
    Shen         : 98,
    Shyvana      : 102,
    Singed       : 27,
    Sion         : 14,
    Sivir        : 15,
    Skarner      : 72,
    Sona         : 37,
    Soraka       : 16,
    Swain        : 50,
    Syndra       : 134,
    TahmKench    : 223,
    Taliyah      : 163,
    Talon        : 91,
    Taric        : 44,
    Teemo        : 17,
    Thresh       : 412,
    Tristana     : 18,
    Trundle      : 48,
    Tryndamere   : 23,
    TwistedFate  : 4,
    Twitch       : 29,
    Udyr         : 77,
    Urgot        : 6,
    Varus        : 110,
    Vayne        : 67,
    Veigar       : 45,
    VelKoz       : 161,
    Vi           : 254,
    Viktor       : 112,
    Vladimir     : 8,
    Volibear     : 106,
    Warwick      : 19,
    Wukong       : 62,
    Xayah        : 498,
    Xerath       : 101,
    XinZhao      : 5,
    Yasuo        : 157,
    Yorick       : 83,
    Zac          : 154,
    Zed          : 238,
    Ziggs        : 115,
    Zilean       : 26,
    Zoe          : 142,
    Zyra         : 143}

const currentVersion = '9.17.1';

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    fontSize: 12
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  label: {
    color: theme.palette.text.secondary,
    fontSize: 20
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
}));

export default function TeamScreen(props) {
  const classes = useStyles();

  var profileIconIdSumm1 = props.summoner1['summonerJson']['profileIconId'].toString();
  var profileIconIdSumm2 = props.summoner2['summonerJson']['profileIconId'].toString();
  var profileIconIdSumm3 = props.summoner3['summonerJson']['profileIconId'].toString();
  var profileIconIdSumm4 = props.summoner4['summonerJson']['profileIconId'].toString();
  var profileIconIdSumm5 = props.summoner5['summonerJson']['profileIconId'].toString();

  var ranksSumm1 = {};
  var ranksSumm2 = {};
  var ranksSumm3 = {};
  var ranksSumm4 = {};
  var ranksSumm5 = {};
  var prettyPrintRanksSumm1 = '';
  var prettyPrintRanksSumm2 = '';
  var prettyPrintRanksSumm3 = '';
  var prettyPrintRanksSumm4 = '';
  var prettyPrintRanksSumm5 = '';


  var i;
  for(i=0; i<props.summoner1['rankJson'].length; i++){
	ranksSumm1[props.summoner1['rankJson'][i]['queueType']] = props.summoner1.rankJson[i]['tier'] + props.summoner1.rankJson[i]['rank'];
	prettyPrintRanksSumm1 += ('-----' + props.summoner1['rankJson'][i]['queueType'] + ': ' + props.summoner1.rankJson[i]['tier'] + ' ' + props.summoner1.rankJson[i]['rank'] + '-----');
  }
  for(i=0; i<props.summoner2['rankJson'].length; i++){
	ranksSumm2[props.summoner2['rankJson'][i]['queueType']] = props.summoner2.rankJson[i]['tier'] + props.summoner2.rankJson[i]['rank'];
	prettyPrintRanksSumm2 += ('-----' + props.summoner2['rankJson'][i]['queueType'] + ': ' + props.summoner2.rankJson[i]['tier'] + ' ' + props.summoner2.rankJson[i]['rank'] + '-----');
  }
  for(i=0; i<props.summoner3['rankJson'].length; i++){
	ranksSumm3[props.summoner3['rankJson'][i]['queueType']] = props.summoner3.rankJson[i]['tier'] + props.summoner3.rankJson[i]['rank'];
	prettyPrintRanksSumm3 += ('-----' + props.summoner3['rankJson'][i]['queueType'] + ': ' + props.summoner3.rankJson[i]['tier'] + ' ' + props.summoner3.rankJson[i]['rank'] + '-----');
  }
  for(i=0; i<props.summoner4['rankJson'].length; i++){
	ranksSumm4[props.summoner1['rankJson'][i]['queueType']] = props.summoner4.rankJson[i]['tier'] + props.summoner4.rankJson[i]['rank'];
	prettyPrintRanksSumm4 += ('-----' + props.summoner4['rankJson'][i]['queueType'] + ': ' + props.summoner4.rankJson[i]['tier'] + ' ' + props.summoner4.rankJson[i]['rank'] + '-----');
  }
  for(i=0; i<props.summoner5['rankJson'].length; i++){
	ranksSumm5[props.summoner5['rankJson'][i]['queueType']] = props.summoner5.rankJson[i]['tier'] + props.summoner5.rankJson[i]['rank'];
	prettyPrintRanksSumm5 += ('-----' + props.summoner5['rankJson'][i]['queueType'] + ': ' + props.summoner5.rankJson[i]['tier'] + ' ' + props.summoner5.rankJson[i]['rank'] + '-----');
  }
  

  var masteriesSumm1 = {};
  var masteriesSumm2 = {};
  var masteriesSumm3 = {};
  var masteriesSumm4 = {};
  var masteriesSumm5 = {};
  var prettyPrintMasteriesSumm1 = [];
  var prettyPrintMasteriesSumm2 = [];
  var prettyPrintMasteriesSumm3 = [];
  var prettyPrintMasteriesSumm4 = [];
  var prettyPrintMasteriesSumm5 = [];

  for(i=0;i<6;i++){
	masteriesSumm1[props.summoner1['masteryJson'][i]['championId']] = props.summoner1['masteryJson'][i]['championPoints']
	prettyPrintMasteriesSumm1[i] = props.summoner1['masteryJson'][i]['championId'] + ': ' + props.summoner1['masteryJson'][i]['championPoints']
  }
  for(i=0;i<6;i++){
	masteriesSumm2[props.summoner2['masteryJson'][i]['championId']] = props.summoner2['masteryJson'][i]['championPoints']
	prettyPrintMasteriesSumm2[i] = props.summoner2['masteryJson'][i]['championId'] + ': ' + props.summoner2['masteryJson'][i]['championPoints']
  }
  for(i=0;i<6;i++){
	masteriesSumm3[props.summoner3['masteryJson'][i]['championId']] = props.summoner3['masteryJson'][i]['championPoints']
	prettyPrintMasteriesSumm3[i] = props.summoner3['masteryJson'][i]['championId'] + ': ' + props.summoner3['masteryJson'][i]['championPoints']
  }
  for(i=0;i<6;i++){
	masteriesSumm4[props.summoner4['masteryJson'][i]['championId']] = props.summoner4['masteryJson'][i]['championPoints']
	prettyPrintMasteriesSumm4[i] = props.summoner4['masteryJson'][i]['championId'] + ': ' + props.summoner4['masteryJson'][i]['championPoints']
  }
  for(i=0;i<6;i++){
	masteriesSumm5[props.summoner5['masteryJson'][i]['championId']] = props.summoner5['masteryJson'][i]['championPoints']
	prettyPrintMasteriesSumm5[i] = props.summoner5['masteryJson'][i]['championId'] + ': ' + props.summoner5['masteryJson'][i]['championPoints']
  }



  return (
    <div className={classes.root}>
      <Grid container spacing={1}>


        <Grid item xs={12}>
          <Paper className={classes.paper}>Lineup</Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}><img className={classes.img} src={'http://ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/profileicon/'+profileIconIdSumm1+'.png'} />
		<br /><label className={classes.label}>{props.summoner1['summonerJson']['name']}</label><br />
		<br />{prettyPrintRanksSumm1}
	  </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner1['masteryJson'][0]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner1['masteryJson'][0]['championId'])}
		<br />{props.summoner1['masteryJson'][0]['championPoints']}
		<br />
	  </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner1['masteryJson'][1]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner1['masteryJson'][1]['championId'])}
		<br />{props.summoner1['masteryJson'][1]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner1['masteryJson'][2]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner1['masteryJson'][2]['championId'])}
		<br />{props.summoner1['masteryJson'][2]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner1['masteryJson'][3]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner1['masteryJson'][3]['championId'])}
		<br />{props.summoner1['masteryJson'][3]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner1['masteryJson'][4]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner1['masteryJson'][4]['championId'])}
		<br />{props.summoner1['masteryJson'][4]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner1['masteryJson'][5]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner1['masteryJson'][5]['championId'])}
		<br />{props.summoner1['masteryJson'][5]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>




        <Grid item xs={12}>
          <Paper className={classes.paper}><img className={classes.img} src={'http://ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/profileicon/'+profileIconIdSumm2+'.png'} />
		<br /><label className={classes.label}>{props.summoner2['summonerJson']['name']}</label><br />
		<br />{prettyPrintRanksSumm2}
	  </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner2['masteryJson'][0]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner2['masteryJson'][0]['championId'])}
		<br />{props.summoner2['masteryJson'][0]['championPoints']}
		<br />
	  </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner2['masteryJson'][1]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner2['masteryJson'][1]['championId'])}
		<br />{props.summoner2['masteryJson'][1]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner2['masteryJson'][2]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner2['masteryJson'][2]['championId'])}
		<br />{props.summoner2['masteryJson'][2]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner2['masteryJson'][3]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner2['masteryJson'][3]['championId'])}
		<br />{props.summoner2['masteryJson'][3]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner2['masteryJson'][4]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner2['masteryJson'][4]['championId'])}
		<br />{props.summoner2['masteryJson'][4]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner2['masteryJson'][5]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner2['masteryJson'][5]['championId'])}
		<br />{props.summoner2['masteryJson'][5]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>


	

        <Grid item xs={12}>
          <Paper className={classes.paper}><img className={classes.img} src={'http://ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/profileicon/'+profileIconIdSumm3+'.png'} />
		<br /><label className={classes.label}>{props.summoner3['summonerJson']['name']}</label><br />
		<br />{prettyPrintRanksSumm3}
	  </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner3['masteryJson'][0]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner3['masteryJson'][0]['championId'])}
		<br />{props.summoner3['masteryJson'][0]['championPoints']}
		<br />
	  </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner3['masteryJson'][1]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner3['masteryJson'][1]['championId'])}
		<br />{props.summoner3['masteryJson'][1]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner3['masteryJson'][2]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner3['masteryJson'][2]['championId'])}
		<br />{props.summoner3['masteryJson'][2]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner3['masteryJson'][3]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner3['masteryJson'][3]['championId'])}
		<br />{props.summoner3['masteryJson'][3]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner3['masteryJson'][4]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner3['masteryJson'][4]['championId'])}
		<br />{props.summoner3['masteryJson'][4]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner3['masteryJson'][5]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner3['masteryJson'][5]['championId'])}
		<br />{props.summoner3['masteryJson'][5]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>




        <Grid item xs={12}>
          <Paper className={classes.paper}><img className={classes.img} src={'http://ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/profileicon/'+profileIconIdSumm4+'.png'} />
		<br /><label className={classes.label}>{props.summoner4['summonerJson']['name']}</label><br />
		<br />{prettyPrintRanksSumm4}
	  </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner4['masteryJson'][0]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner4['masteryJson'][0]['championId'])}
		<br />{props.summoner4['masteryJson'][0]['championPoints']}
		<br />
	  </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner4['masteryJson'][1]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner4['masteryJson'][1]['championId'])}
		<br />{props.summoner4['masteryJson'][1]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner4['masteryJson'][2]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner4['masteryJson'][2]['championId'])}
		<br />{props.summoner4['masteryJson'][2]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner4['masteryJson'][3]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner4['masteryJson'][3]['championId'])}
		<br />{props.summoner4['masteryJson'][3]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner4['masteryJson'][4]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner4['masteryJson'][4]['championId'])}
		<br />{props.summoner4['masteryJson'][4]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner4['masteryJson'][5]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner4['masteryJson'][5]['championId'])}
		<br />{props.summoner4['masteryJson'][5]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>




        <Grid item xs={12}>
          <Paper className={classes.paper}><img className={classes.img} src={'http://ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/profileicon/'+profileIconIdSumm5+'.png'} />
		<br /><label className={classes.label}>{props.summoner5['summonerJson']['name']}</label><br />
		<br />{prettyPrintRanksSumm5}
	  </Paper>
        </Grid>

        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner5['masteryJson'][0]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner5['masteryJson'][0]['championId'])}
		<br />{props.summoner5['masteryJson'][0]['championPoints']}
		<br />
	  </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner5['masteryJson'][1]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner5['masteryJson'][1]['championId'])}
		<br />{props.summoner5['masteryJson'][1]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner5['masteryJson'][2]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner5['masteryJson'][2]['championId'])}
		<br />{props.summoner5['masteryJson'][2]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner5['masteryJson'][3]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner5['masteryJson'][3]['championId'])}
		<br />{props.summoner5['masteryJson'][3]['championPoints']}
		<br /></Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner5['masteryJson'][4]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner5['masteryJson'][4]['championId'])}
		<br />{props.summoner5['masteryJson'][4]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={2}>
          <Paper className={classes.paper}>
		<img className={classes.img} src={'http:\/\/ddragon.leagueoflegends.com/cdn/'+currentVersion+'/img/champion/'
							+getKeyByValue(championDict, props.summoner5['masteryJson'][5]['championId'])+'.png'} />
		<br />{getKeyByValue(championDict, props.summoner5['masteryJson'][5]['championId'])}
		<br />{props.summoner5['masteryJson'][5]['championPoints']}
		<br /></Paper>
        </Grid>
	<Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>


      </Grid>
    </div>
  );
}

