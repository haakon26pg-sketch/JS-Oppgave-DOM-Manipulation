// Mål for oppgaven: Lage en randomized loot kiste som gir tilfeldige graderinger av forskjellige fantasi våpen til et potensielt spill.
//Lage en array med fem våpen. Legge til sjeldenhetsgrader og lage et inventory som viser hva slags gjenstander man har fått fra kisten.

const openChest = document.querySelector("#openChest");
const lootName = document.querySelector("#lootName");
const lootRarity = document.querySelector("#lootRarity");
const lootAttack = document.querySelector("#lootAttack");
const inventorylist = document.querySelector("#inventoryList");

const items = [
    {
        name: "Rusty Sword",
        rarity: "Common",
        attack: 3
    },
     {
        name: "Rusty Sword",
        rarity: "Uncommon",
        attack: 6
    },
    {
        name: "Steel Longsowrd",
        rarity: "Uncommon",
        attack: 12
    },
      {
        name: "Steel Longsowrd",
        rarity: "Rare",
        attack: 17
    },
    {
        name: "Elven Bow",
        rarity: "Rare",
        attack: 25
    },
        {
        name: "Elven Bow",
        rarity: "Common",
        attack: 8
    },
    {
        name: "Staff of the Ancients",
        rarity: "Epic",
        attack: 40
    },
    {
        name: "Dragonslayer",
        rarity: "Legendary",
        attack: 75
    },    {
        name: "Sword of The Seven Cosmos",
        rarity: "Godlike",
        attack: 1337
    }
];

const inventory = [];

openChest.addEventListener("click", function () {


// Lage randomizer til innholdet som kommer fra kista

console.log(items[0].name);
console.log(items[0].rarity);
console.log(items[0].attack);

const randomIndex = Math.floor(Math.random() * items.length);

const randomitem = items[randomIndex];

console.log(randomitem.name);
console.log(randomitem.rarity);

// Oppdaterer HTML med våpenet som ble gitt
lootName.textContent = `You found a ${randomitem.name}!`;
lootRarity.textContent = randomitem.rarity;

// Gi angrepspoeng til våpenet
lootAttack.textContent = `Attack: ${randomitem.attack}`;

// Gi sjeldenhetsgrader forskjellige farger

if (randomitem.rarity === "Godlike") {
        lootRarity.style.color = "turquoise"
    } else if (randomitem.rarity === "Legendary") {
        lootRarity.style.color = "gold";
    } else if (randomitem.rarity === "Epic") {
        lootRarity.style.color = "purple";
    } else if (randomitem.rarity === "Rare") {
        lootRarity.style.color = "blue";
    } else if (randomitem.rarity === "Uncommon") {
        lootRarity.style.color = "green";
    } else {
        lootRarity.style.color = "gray";
    }

// Gjenstander som havner i inventory
inventory.push(randomitem);

const inventoryItem = document.createElement("li");

inventoryItem.textContent = `${randomitem.name} - ${randomitem.rarity} - Attack: ${randomitem.attack}`;

inventorylist.appendChild(inventoryItem);

console.log(inventory);

});





