"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = /** @class */ (function () {
    function Character(_name, _energy, _life, _attack, _defense) {
        this._name = _name;
        this._energy = _energy;
        this._life = _life;
        this._attack = _attack;
        this._defense = _defense;
    }
    Object.defineProperty(Character.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "setName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Character.prototype.showStatus = function () {
        return ("Warrior:" +
            "\nName: " +
            this._name +
            "\nEnergy: " +
            this._energy.toFixed(1) +
            "\nAttack: " +
            this._attack.toFixed(1) +
            "\nDefense: " +
            this._defense.toFixed(1));
    };
    Character.prototype.randomize = function (factor) {
        return Math.random() * factor;
    };
    Character.prototype.trainAttack = function () {
        this._attack += this.randomize(7);
        this._energy -= this.randomize(10);
        if (this._attack > 100) {
            this._attack = 100;
        }
    };
    Character.prototype.trainDefense = function () {
        this._defense += this.randomize(5);
        this._energy -= this.randomize(10);
        if (this._defense > 100) {
            this._defense = 100;
        }
    };
    Character.prototype.rest = function (hours) {
        this._energy += hours + this.randomize(10);
        if (this._energy > 100) {
            this._energy = 100;
        }
    };
    Character.prototype.battle = function () {
        var wear = this.randomize(100);
        this._energy -= wear;
        return wear;
    };
    Character.prototype.isDead = function () {
        return this._energy < 0;
    };
    return Character;
}());
exports.default = Character;
