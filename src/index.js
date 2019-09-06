import React from 'react';
import ReactDOM from 'react-dom';

import {global_style} from './styles';


import TeamScreen from './team_screen';

import {getSummonerInfo} from './riot_api_component';



export class App extends React.Component {

	render() {
		return (
			<div >
				<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<div name='pseudo-body'>
					<div id='title' style={{textAlign: 'center'}}><h1>Clash Guru</h1></div>
					<div id='app' style={{textAlign: 'center'}}></div>
					<div id='team_screen'></div>

				</div>
			</div>
		);
	}
}

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {showResults: false,
			      summoner1: '',
			      summoner2: '',
			      summoner3: '',
			      summoner4: '',
			      summoner5: '',
			      region: '',
			      summoner1Object: {summonerJson: {name: '[summoner]',
							       profileIconId: 0},
						rankJson: [{queueType: '[queue]',
							         tier: '[tier]',
							         rank: '[rank]'}],
						masteryJson: [{"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},]
			      		       },
			      summoner2Object: {summonerJson: {name: '[summoner]',
							       profileIconId: 0},
						rankJson: [{queueType: '[queue]',
							         tier: '[tier]',
							         rank: '[rank]'}],
						masteryJson: [{"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},]},
			      summoner3Object: {summonerJson: {name: '[summoner]',
							       profileIconId: 0},
						rankJson: [{queueType: '[queue]',
							         tier: '[tier]',
							         rank: '[rank]'}],
						masteryJson: [{"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},]},
			      summoner4Object: {summonerJson: {name: '[summoner]',
							       profileIconId: 0},
						rankJson: [{queueType: '[queue]',
							         tier: '[tier]',
							         rank: '[rank]'}],
						masteryJson: [{"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},]},
			      summoner5Object: {summonerJson: {name: '[summoner]',
							       profileIconId: 0},
						rankJson: [{queueType: '[queue]',
							         tier: '[tier]',
							         rank: '[rank]'}],
						masteryJson: [{"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},
							      {"championPoints": 0,
        						       "championId": 0},]}};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleApiResult = this.handleApiResult.bind(this);
	}

	handleApiResult(summonerObject, apiValue) {
		//console.log('handling api result');
		this.setState({[summonerObject]: apiValue});
		//console.log('api result state');
		//console.log(this.state);
		ReactDOM.render(<TeamScreen summoner1={this.state.summoner1Object}
					    summoner2={this.state.summoner2Object}
					    summoner3={this.state.summoner3Object}
					    summoner4={this.state.summoner4Object}
 					    summoner5={this.state.summoner5Object} />, document.getElementById('team_screen'));
	}

	
	handleSubmit(event) {
		event.preventDefault();
		this.setState({ showResults: true });

  		//alert(event.target.summoner1.value + " / " + event.target.summoner5.value);
		getSummonerInfo(this.state.summoner1, 'summoner1Object', this.handleApiResult, this.checkState);
		getSummonerInfo(this.state.summoner2, 'summoner2Object', this.handleApiResult);
		getSummonerInfo(this.state.summoner3, 'summoner3Object', this.handleApiResult);
		getSummonerInfo(this.state.summoner4, 'summoner4Object', this.handleApiResult);
		getSummonerInfo(this.state.summoner5, 'summoner5Object', this.handleApiResult);





		//setTimeout(function(){console.log(s['value']);}, 5000);
		ReactDOM.render(<TeamScreen summoner1={this.state.summoner1Object}
					    summoner2={this.state.summoner2Object}
					    summoner3={this.state.summoner3Object}
					    summoner4={this.state.summoner4Object}
 					    summoner5={this.state.summoner4Object} />, document.getElementById('team_screen'));
		
	}

	handleFormChange(e) {
		let change = {};
    		change[e.target.name] = e.target.value;
    		this.setState(change);
		//console.log(this.state);
	}


	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<label>Summoner 1: <input type='text' name='summoner1' value={this.state.value} onChange={this.handleFormChange} placeholder='Impact' /></label><br />
				<label>Summoner 2: <input type='text' name='summoner2' value={this.state.value} onChange={this.handleFormChange} placeholder='Xmithie' /></label><br />
				<label>Summoner 3: <input type='text' name='summoner3' value={this.state.value} onChange={this.handleFormChange} placeholder='Jensen' /></label><br />
				<label>Summoner 4: <input type='text' name='summoner4' value={this.state.value} onChange={this.handleFormChange} placeholder='Doublelift' /></label><br />
				<label>Summoner 5: <input type='text' name='summoner5' value={this.state.value} onChange={this.handleFormChange} placeholder='CoreJJ' /></label><br />
				<select  style={{marginLeft: 100}} name='region'>
					<option value='NA'>NA</option>
					<option value='BR1'>BR</option>
					<option value='EUN1'>EUNE</option>
					<option value='EUW1'>EUW</option>
					<option value='LA1'>LAN</option>
					<option value='LA2'>LAS</option>
					<option value='OC1'>OCE</option>
					<option value='RU'>RU</option>
					<option value='TR1'>TR</option>
					<option value='JP1'>JP</option>
					<option value='KR'>KR</option>
				</select>
				<input type='submit' value='Submit' />

				
			</form>
		);
	}
}




document.title = "Clash Guru";
document.body.style.backgroundColor = global_style.background;
document.body.style.color= global_style.color;
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Form />, document.getElementById('app'));
