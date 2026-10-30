// Formålet med koden og prosjektet - lage en random loot chest hvor vært pull fra kista har en tilfeldig sjanse for en gjenstand av ulik sjeldenshetsgrad

// Henter HTML-elementene
const openChest = document.querySelector("#openChest");
const lootName = document.querySelector("#lootName");
const lootRarity = document.querySelector("#lootRarity");
const lootAttack = document.querySelector("#lootAttack");
const inventorylist = document.querySelector("#inventoryList");
const lootBox = document.querySelector(".loot-box");

// Alle våpen som kan finnes i kisten
const items = [
    {
        name: "Rusty Axe",
        rarity: "Common",
        attack: 3,
        icon: "🪓"
    },
    {
        name: "Wooden Staff",
        rarity: "Common",
        attack: 4,
        icon: "🏹"
    },
    {
        name: "Blunt Mace",
        rarity: "Common",
        attack: 3,
        icon: "⚔️"
    },
    {
        name: "Blunt Mace",
        rarity: "Uncommon",
        attack: 3,
        icon: "🔨"
    },
    {
        name: "Rusty Sword",
        rarity: "Uncommon",
        attack: 6,
        icon: "⚔️"
    },
    {
        name: "Steel Longsword",
        rarity: "Uncommon",
        attack: 12,
        icon: "⚔️"
    },
    {
        name: "Steel Longsword",
        rarity: "Rare",
        attack: 17,
        icon: "⚔️"
    },
    {
        name: "Elven Bow",
        rarity: "Rare",
        attack: 25,
        icon: "🏹"
    },
    {
        name: "Precursor Bow",
        rarity: "Epic",
        attack: 80,
        icon: "🏹"
    },
    {
        name: "Staff of the Ancients",
        rarity: "Epic",
        attack: 40,
        icon: "🔱"
    },
    {
        name: "Dragonslayer",
        rarity: "Legendary",
        attack: 75,
        icon: "🗡️"
    },
    {
        name: "Spear of The Seven Cosmos",
        rarity: "Godlike",
        attack: 1337,
        icon: "⚜️"
    },
    {
        name: "Glaives of The Nether",
        rarity: "Godlike",
        attack: 1020,
        icon: "💀"
    }
];

// Lagrer alle våpen spilleren får
const inventory = [];

// Kjører når spilleren åpner kisten
openChest.addEventListener("click", function () {

    // Velger en sjeldenhetsgrad
    // Genererer et tilfeldig tall mellom 1 og 100

    const rarityRoll = Math.floor(Math.random() * 100) + 1;

    // Sjansen for de ulike gjenstandene
    let selectedRarity;

    if (rarityRoll <= 50) {
        selectedRarity = "Common";
    } else if (rarityRoll <= 75) {
        selectedRarity = "Uncommon";
    } else if (rarityRoll <= 90) {
        selectedRarity = "Rare";
    } else if (rarityRoll <= 97) {
        selectedRarity = "Epic";
    } else if (rarityRoll <= 99) {
        selectedRarity = "Legendary";
    } else {
        selectedRarity = "Godlike";
    }

    // Filtrerer våpen basert på sjeldenhetsgrad

    const availableItems = items.filter(function (item) {
        return item.rarity === selectedRarity;
    });

    // Velger et tilfeldig våpen fra riktig kategori

    const randomIndex = Math.floor(Math.random() * availableItems.length);
    const randomitem = availableItems[randomIndex];

    // Skriver informasjon til konsollen
    console.log("Rarity Roll:", rarityRoll);
    console.log("Selected Rarity:", selectedRarity);
    console.log("Obtained Item:", randomitem.name);

    // Oppdaterer HTML med våpeninformasjonen

    lootName.textContent = `${randomitem.icon} You obtained ${randomitem.name}!`;
    lootRarity.textContent = randomitem.rarity;
    lootAttack.textContent = `Attack: ${randomitem.attack}`;

    // Gir sjeldenhetsgrader forskjellige farger

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

    // Henter fargen til sjeldenhetsgraden

    const rarityColor = lootRarity.style.color;

    // Endrer fargen på kanten rundt loot-boksen
    lootBox.style.borderColor = rarityColor;

    // Animerer loot-boksen med rarity glow

    lootBox.animate(
        [
            {
                boxShadow: "0 0 0px " + rarityColor,
                transform: "scale(0.95)"
            },
            {
                boxShadow: "0 0 35px " + rarityColor,
                transform: "scale(1.02)"
            },
            {
                boxShadow: "0 0 0px " + rarityColor,
                transform: "scale(1)"
            }
        ],
        {
            duration: 600,
            easing: "ease-out"
        }
    );

    

    // Legger våpenet inn i inventory-arrayet

    inventory.push(randomitem);

    // Oppretter et nytt HTML-element
    // Som skal vise våpenet i inventory

    const inventoryItem = document.createElement("li");

    // Legger til informasjon om våpenet
    inventoryItem.textContent =
        `${randomitem.icon} ${randomitem.name} - ${randomitem.rarity} - Attack: ${randomitem.attack}`;

    // Gir inventory-elementet samme farge som rarity
    inventoryItem.style.borderLeftColor = rarityColor;

    // Legger våpenet til i inventory-listen
    inventorylist.appendChild(inventoryItem);

    // Viser inventory i konsollen
    console.log("Inventory:", inventory);

});