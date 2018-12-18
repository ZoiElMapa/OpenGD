cc.Class({
    extends: cc.Component,

    properties: {
    	///Cube object
    	spdboost: 1,
    	hsp: 10.6,

    	///Physics
    	gravdir: 1,
    	hsp: 0,
    	vsp: 0,
    	spd: 0.1,
    	maxspd: 1,
    	hdir: 1,
    	grav: 1.5,
    	avoidup: 0,
    	maxvsp: 25,
    	mini: 0
    },

    start () {

    },

    update (dt) {}
});
