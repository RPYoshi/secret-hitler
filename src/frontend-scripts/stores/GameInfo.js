import {extendObservable} from 'mobx';

export default class GameInfo {
	constructor() {
		extendObservable(this, {
			game: {}
		});
	}

	updateGameInfo(game) {
		this.game = game;
	}
}