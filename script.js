// Mål for oppgaven: Lage en randomized loot kiste som gir tilfeldige graderinger av forskjellige fantasi våpen til et potensielt spill.
//Lage en array med fem våpen. Legge til sjeldenhetsgrader og lage et inventory som viser hva slags gjenstander man har fått fra kisten.

const container = document.querySelector("#loot-selector");

const items = [
    {
        name: "Rusty Sword",
        Rarity: "Common",
        attack: 3
    },
    {
        name: "Steel Longsowrd",
        rarity: "Uncommon",
        attack: 12
    },
    {
        name: "Elven Bow",
        rarity: "Rare",
        attack: 25
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
    }
];


// Lage randomizer til innholdet som kommer fra kista

console.log(items[0].name);
console.log(items[0].rarity);
console.log(items[0].attack);

const randomIndex = Math.floor(Math.random() * items.length);

const randomitem = items[randomIndex];

console.log(randomitem.name);
console.log(randomitem.rarity);

// Gi sjeldenhetsgrader forskjellige farger

if(randomitem.rarity === "Legendary") {
    lootResult.style.color = "gold";
} else if (randomitem.rarity === "Epic") {
    lootResult.style.color === "Purple";
} else if (randomitem.rarity === "Rare") {
    lootResult.style.color = "blue";
} else {
    lootResult.style.color = "gray";
}

// Legge til "You found.."
lootResult.textcontent = `You found a ${randomitem.name}!`;
