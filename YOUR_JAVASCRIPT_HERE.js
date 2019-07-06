// Write your JS here
const hero = {
    name: "Lemming",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "gun",
        damage: 2
    }
}

const newWeapon = {
    type : "dagger",
    damage : 2
}

function rest(heroObject) {
    if (heroObject.health == 10) {
        alert("Health is already 10. You don't need rest!");
        return heroObject;
    } else {
        heroObject.health = 10;
        return heroObject;
    }
}

function pickUpItem(heroObject, newWeapon) {
    heroObject.inventory.push(newWeapon);
}

function equipWeapon(heroObject) {
    if (heroObject.inventory.length > 0) {
        heroObject.weapon = heroObject.inventory[0];
    } else {
        return null;
    }
}

// function displayStats() {

// }

// displayStats()