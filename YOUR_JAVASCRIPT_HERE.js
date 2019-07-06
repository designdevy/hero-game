// Write your JS here
const hero = {
    name: "Lemming",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "fly swatter",
        damage: 2
    }
}

const enemy = [{
    name: "Bear",
    heroic: false,
    inventory: [],
    photo: "https://vignette.wikia.nocookie.net/grizzy-and-the-lemmings/images/3/3a/Grizzy.jpg/revision/latest?cb=20171206194635",
    health: 10,
    weapon: {
        type: "water gun",
        damage: 1
    }
}, {
    name: "Elk",
    heroic: false,
    photo: "https://images.vexels.com/media/users/3/160388/isolated/preview/391f1018f9e1a403557d212c8e83ddba-moose-elk-antler-flat-by-vexels.png",
    inventory: [],
    health: 10,
    weapon: {
        type: "horns",
        damage: 2
    }
}, {
    name: "Hare",
    heroic: false,
    photo: "https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/220px-Bugs_Bunny.svg.png",
    inventory: [],
    health: 10,
    weapon: {
        type: "teeth",
        damage: 1
    }
}, {
    name: "Panda",
    heroic: false,
    photo: "http://www.hisop.cat/3957-large_default/figura-po-kung-fu-panda.jpg",
    inventory: [],
    health: 10,
    weapon: {
        type: "kung fu",
        damage: 3
    }
}]

const newWeapon = {
    type: "dagger",
    damage: 2
}

function rest(heroObject) {
    if (heroObject.health == 10) {
        alert("Health is already 10. You don't need rest!");
        return heroObject;
    } else {
        heroObject.health = 10;
        displayStats(hero);
        return heroObject;
    }
}

function pickUpItem(heroObject, newWeapon) {
    heroObject.inventory.push(newWeapon);
}

function equipWeapon(heroObject) {
    if (heroObject.inventory.length > 0) {
        heroObject.weapon = heroObject.inventory[0];
        displayStats(heroObject);
    } else {
        return null;
    }
}

function displayStats(heroObject) {
    document.getElementById('infoName').innerHTML = heroObject.name;
    document.getElementById("infoHealth").innerHTML = 'Health: ' + heroObject.health;
    document.getElementById("infoWeaponType").innerHTML = 'Weapon type: ' + heroObject.weapon.type;
    document.getElementById("infoWeaponDamage").innerHTML = 'Weapon damage: ' + heroObject.weapon.damage;
    if (heroObject.health <= 0) {
        document.getElementById("infoHealth").style.color = "red";
    } else {
        document.getElementById("infoHealth").style.color = "black";
    }
}

function changeHeroName(event) {
    event.preventDefault()
    hero.name = document.getElementById('newHeroName').value;
    displayStats(hero);
    document.getElementById('newHeroName').value = null;
}

let randomNumber;

function findEnemy() {
    randomNumber = Math.floor(Math.random() * ((enemy.length - 1) + 1));
    displayEnemyStats();
}

function displayEnemyStats() {
    document.getElementById('enemyName').innerHTML = enemy[randomNumber].name;
    document.getElementById("enemyHealth").innerHTML = 'Health: ' + enemy[randomNumber].health;
    document.getElementById("enemyWeaponType").innerHTML = 'Weapon type: ' + enemy[randomNumber].weapon.type;
    document.getElementById("enemyWeaponDamage").innerHTML = 'Weapon damage: ' + enemy[randomNumber].weapon.damage;
    document.getElementById("enemy-photo").src = enemy[randomNumber].photo;
    if (enemy[randomNumber].health <= 0) {
        document.getElementById("enemyHealth").style.color = "red";
    } else {
        document.getElementById("enemyHealth").style.color = "black";
    }
}

function attack() {
    if (enemy[randomNumber].health > 0 && hero.health > 0) {
        hero.health = hero.health - enemy[randomNumber].weapon.damage;
        enemy[randomNumber].health = enemy[randomNumber].health - hero.weapon.damage;
        if (enemy[randomNumber].health <= 0 && hero.health <= 0) {
            alert("Nobody won!");
        } else if (hero.health <= 0) {
            alert("You lose! Get some rest!");
        } else if (enemy[randomNumber].health <= 0) {
            alert("You won!");
        }
    } else if (enemy[randomNumber].health <= 0) {
        alert('Enemy needs rest! Choose a new one!');
    } else if (hero.health <= 0) {
        alert("You are exhausted! Get some rest!");
    }
    displayStats(hero);
    displayEnemyStats();
}

findEnemy()
displayStats(hero)