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
    	vdir: 0,

    	///Collisions
    	collidingY: false
    },

    onEnable () {
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
    },

    start () {

    },

    onCollisionEnter (other, self) {
        var otherAabb = other.world.aabb;
        var otherPreAabb = other.world.preAabb.clone();

        var selfAabb = self.world.aabb;
        var selfPreAabb = self.world.preAabb.clone();

        selfPreAabb.y = selfAabb.y;
        otherPreAabb.y = otherAabb.y;

        if (cc.Intersection.rectRect(selfPreAabb, otherPreAabb)) 
        {
            this.collidingY = true;
        }
    },

    onCollisionExit() {
    	this.collidingY = false;
    },

    update (dt) {
    	this.vsp += this.grav;
    	if(this.vsp > this.maxvsp) {
    		this.vsp = this.maxvsp;
    	}

    	this.hdir = Math.sign(this.hsp);
    	this.vdir = Math.sign(this.vsp);

    	if(this.collidingY === false) {
    		this.node.y += (this.vsp * this.gravdir) * -1;
    	}
    }
});
