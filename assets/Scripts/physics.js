cc.Class({
    extends: cc.Component,

    properties: {
    	///Cube object
    	spdboost: 1,
    	hsp: 10.6,

    	///initialize physics
    	gravdir: 1,
    	hsp: 0,
    	vsp: 0,
    	spd: 0.1,
    	maxspd: 1,
    	hdir: 1,
    	grav: 1.5,
    	avoidup: 0,
    	maxvsp: 25,
    	mini: 0,

    	///Physics
    	hdir: 0,
    	vdir: 0
    },

    onEnable () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    start () {

    },

    onCollisionEnter () {

    },

    update (dt) {
    	this.vsp += this.grav;
    	if(this.vsp > this.maxvsp) {
    		this.vsp = this.maxvsp;
    	}

    	this.hdir = Math.sign(this.hsp);
    	this.vdir = Math.sign(this.vsp);
    }
});
