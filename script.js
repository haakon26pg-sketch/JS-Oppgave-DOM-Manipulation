// Mål for oppgaven: Lage en randomized loot kiste som gir tilfeldige graderinger av forskjellige fantasi våpen til et potensielt spill.
//Lage en array med fem våpen. Legge til sjeldenhetsgrader og lage et inventory som viser hva slags gjenstander man har fått fra kisten.

const openChest = document.querySelector("#openChest");
const lootName = document.querySelector("#lootName");
const lootRarity = document.querySelector("#lootRarity");
const lootAttack = document.querySelector("#lootAttack");
const inventorylist = document.querySelector("#inventoryList");
const lootBox = document.querySelector(".loot-box");

const items = [
    {
        name: "Rusty Axe",
        rarity: "Common",
        attack: 3
    },
     {
        name: "Wooden Staff",
        rarity: "Common",
        attack: 4
    },
       {
        name: "Blunt Mace",
        rarity: "Common",
        attack: 3
    },
        {
            name: "Blunt Mace",
            rarity: "Uncommon",
            attack: 3
        },
     {
        name: "Rusty Sword",
        rarity: "Uncommon",
        attack: 6
    },
    {
        name: "Steel Longsword",
        rarity: "Uncommon",
        attack: 12
    },
      {
        name: "Steel Longsword",
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
    },    
    {
        name: "Spear of The Seven Cosmos",
        rarity: "Godlike",
        attack: 1337
    },
      {
        name: "Glaives of The Nether",
        rarity: "Godlike",
        attack: 1020
    }
];

const inventory = [];

openChest.addEventListener("click", function () {

    // 1. genere tilfeldig gjenstand
    const randomIndex = Math.floor(Math.random() * items.length);
    const randomitem = items[randomIndex];

    // 2. oppdatert html
    lootName.textContent = `You obtained ${randomitem.name}!`;
    lootRarity.textContent = randomitem.rarity;
    lootAttack.textContent = `Attack: ${randomitem.attack}`;

    // 3. Your existing rarity if/else statements
    if (randomitem.rarity === "Godlike") {
        lootRarity.style.color = "turquoise";
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

    // animasjon
    const rarityColor = lootRarity.style.color;

    lootBox.style.borderColor = rarityColor;

    lootBox.animate(
        [
            { boxShadow: "0 0 0px " + rarityColor, transform: "scale(0.95)" },
            { boxShadow: "0 0 35px " + rarityColor, transform: "scale(1.02)" },
            { boxShadow: "0 0 0px " + rarityColor, transform: "scale(1)" }
        ],
        {
            duration: 600,
            easing: "ease-out"
        }
    );

    // 5. legge våpen til i inventory
    inventory.push(randomitem);

    const inventoryItem = document.createElement("li");

    inventoryItem.textContent = `${randomitem.name} - ${randomitem.rarity} - Attack: ${randomitem.attack}`;

    inventoryItem.style.borderLeftColor = rarityColor;

    inventorylist.appendChild(inventoryItem);

});




