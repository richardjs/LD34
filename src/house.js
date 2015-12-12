'use strict'

var I = require('./image.js')
var Villager = require('./villager.js')

class House{
	constructor(map, pos){
		this.map = map
		this.pos = pos
		this.image = I.HOUSE

		this.map.entities.push(new Villager(this.map, this))
	}

	update(){}
}

module.exports = House
