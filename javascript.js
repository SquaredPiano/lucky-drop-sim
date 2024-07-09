// let clickCount = 0;
// const MAXCLICKS = 3;
// let chance;
// let bound = 21;

// function activateDot() {
//     const dots = document.getElementsByClassName('dot');
//     let rarityContainer = document.getElementById('rarityContainer');
//     if (clickCount < MAXCLICKS) {
//         dots[clickCount].classList.add('active');
//         clickCount++;
//         chance = getRandomInt(1, 101);
//         console.log(chance);
//         if (chance < bound) {
//             console.log(rarityContainer.innerHTML)
//             if (rarityContainer.innerHTML.includes('Common')) {
//                 rarityContainer.innerHTML = 'Rare';
//                 rarityContainer.classList.add('rare');
//             }
//             else if (rarityContainer.innerHTML.includes('Rare')) {
//                 rarityContainer.innerHTML = 'Epic';
//                 rarityContainer.classList.remove('rare');
//                 rarityContainer.classList.add('epic');
//             }
//             else if (rarityContainer.innerHTML.includes('Epic')) {
//                 rarityContainer.innerHTML = 'Legendary';
//                 rarityContainer.classList.remove('epic');
//                 rarityContainer.classList.add('legendary');
//             }
//             bound += 5;
//         }
//     } else {
//         clickCount = 0;
//         for (let dot of dots) {
//             dot.classList.remove('active');
//         }
//         bound = 21;
//         rarityContainer.innerHTML = 'Common';
//         if (rarityContainer.classList.contains('common')) {
//             getCommonRewards();
//             rarityContainer.classList.remove('common');
//         }
//         else if (rarityContainer.classList.contains('rare')) {
//             getRareRewards();
//             rarityContainer.classList.remove('rare');
//         } else if (rarityContainer.classList.contains('epic')) {
//             getEpicRewards();
//             rarityContainer.classList.remove('epic');
//         }
//         else if (rarityContainer.classList.contains('legendary')) {
//             getLegendaryRewards();
//             rarityContainer.classList.remove('legendary');
//         }
//         rarityContainer.classList.add('common');
//     }
// }

// function getRandomInt(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
// }

// function getCommonRewards() {
//     chance = getRandomInt(1, 101);
//     document.getElementById('resultPopup').style.display = 'block';
//     console.log(chance + " for common rewards");
//     if (1 <= chance <= 30) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 1500 gold!';
//     } else if (31 <= chance <= 60) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 20 common wild cards!';
//     } else if (61 <= chance <= 90) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 10 rare wild cards!';
//     } else if (91 <= chance <= 100) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 5 epic wild cards!';
//     }
// }

// function getRareRewards() {
//     chance = getRandomInt(1, 101);
//     document.getElementById('resultPopup').style.display = 'block';
//     if (1 <= chance <= 25) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 7500 gold!';
//     } else if (26 <= chance <= 50) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 200 common wild cards!';
//     } else if (51 <= chance <= 75) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 50 rare wild cards!';
//     } else if (76 <= chance <= 85) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 20 epic wild cards!';
//     } else if (86 <= chance <= 95) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 1 legendary wild card!';
//     } else if (96 <= chance <= 100) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 1 champion wild card!';
//     }
// }

// function getEpicRewards() {
//     chance = getRandomInt(1, 101);
//     document.getElementById('resultPopup').style.display = 'block';
//     if (1 <= chance <= 12) {
//         document.getElementById('resultMessage').innerHTML = 'You have won a common book!';
//     } else if (13 <= chance <= 23) {
//         document.getElementById('resultMessage').innerHTML = 'You have won a rare book!';
//     } else if (24 <= chance <= 30) {
//         document.getElementById('resultMessage').innerHTML = 'You have won an epic book!';
//     } else if (31 <= chance <= 50) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 5 legendary wild cards!';
//     } else if (51 <= chance <= 70) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 3 champion wild cards!';
//     } else if (71 <= chance <= 90) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 7500 elite wild cards!';
//     } else if (91 <= chance <= 100) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 1 evolution wild shard!';
//     }
// }

// function getLegendaryRewards() {
//     chance = getRandomInt(1, 101);
//     document.getElementById('resultPopup').style.display = 'block';
//     if (1 <= chance <= 30) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 1 legendary book!';
//     } else if (31 <= chance <= 60) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 1 book of books!';
//     } else if (61 <= chance <= 90) {
//         document.getElementById('resultMessage').innerHTML = 'You have won 50000 Elite Wild Cards!';
//     } else if (91 <= chance <= 100) {
//         const possibleEvos = ["Evo Barbarians", "Evo Royal Giant", "Evo Firecracker", "Evo Skeletons", "Evo Mortar", "Evo Knight", "Evo Royal Recruits", "Evo Bats", "Evo Archers", "Evo Ice Spirit", "Evo Valkyrie", "Evo Bomber", "Evo Wall Breakers", "Evo Tesla", "Evo Zap", "Evo Battle Ram", "Evo Wizard", "Evo Goblin Barrel", "Evo Goblin Giant"];
//         let evo = getRandomInt(0, possibleEvos.length - 1);
//         let evoStr = possibleEvos[evo];
//         document.getElementById('resultMessage').innerHTML = `You have unlocked ${evoStr}!`;
//     }
// }

// document.getElementById('activateButton').addEventListener('click', activateDot);

let clickCount = 0;
const MAXCLICKS = 3;
let chance;
let bound = 21;

function activateDot() {
    const dots = document.getElementsByClassName('dot');
    let rarityContainer = document.querySelector('.rarityContainer');
    
    if (clickCount < MAXCLICKS) {
        dots[clickCount].classList.add('active');
        clickCount++;
        chance = getRandomInt(1, 101);
        console.log(chance);
        
        if (chance < bound) {
            if (rarityContainer.innerHTML.includes('Common')) {
                rarityContainer.innerHTML = 'Rare';
                rarityContainer.classList.add('rare');
            } else if (rarityContainer.innerHTML.includes('Rare')) {
                rarityContainer.innerHTML = 'Epic';
                rarityContainer.classList.remove('rare');
                rarityContainer.classList.add('epic');
            } else if (rarityContainer.innerHTML.includes('Epic')) {
                rarityContainer.innerHTML = 'Legendary';
                rarityContainer.classList.remove('epic');
                rarityContainer.classList.add('legendary');
            }
            bound += 5;
        }
    } else {
        clickCount = 0;
        for (let dot of dots) {
            dot.classList.remove('active');
        }
        bound = 21;
        if (rarityContainer.innerHTML.includes('Common')) {
            getCommonRewards();
        } else if (rarityContainer.innerHTML.includes('Rare')) {
            getRareRewards();
        } else if (rarityContainer.innerHTML.includes('Epic')) {
            getEpicRewards();
        } else if (rarityContainer.innerHTML.includes('Legendary')) {
            getLegendaryRewards();
        }
        rarityContainer.innerHTML = 'Common';
        rarityContainer.classList.remove('rare', 'epic', 'legendary');
        rarityContainer.classList.add('common');
    }
}

function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1)) + minCeiled;
}

function getCommonRewards() {
    chance = getRandomInt(1, 101);
    document.getElementById('resultPopup').style.display = 'block';
    console.log(chance + " for common rewards");
    if (chance >= 1 && chance <= 30) {
        document.getElementById('resultMessage').innerHTML = 'You have won 1500 gold!';
    } else if (chance >= 31 && chance <= 60) {
        document.getElementById('resultMessage').innerHTML = 'You have won 20 common wild cards!';
    } else if (chance >= 61 && chance <= 90) {
        document.getElementById('resultMessage').innerHTML = 'You have won 10 rare wild cards!';
    } else if (chance >= 91 && chance <= 100) {
        document.getElementById('resultMessage').innerHTML = 'You have won 5 epic wild cards!';
    }
}

function getRareRewards() {
    chance = getRandomInt(1, 101);
    document.getElementById('resultPopup').style.display = 'block';
    if (chance >= 1 && chance <= 25) {
        document.getElementById('resultMessage').innerHTML = 'You have won 7500 gold!';
    } else if (chance >= 26 && chance <= 50) {
        document.getElementById('resultMessage').innerHTML = 'You have won 200 common wild cards!';
    } else if (chance >= 51 && chance <= 75) {
        document.getElementById('resultMessage').innerHTML = 'You have won 50 rare wild cards!';
    } else if (chance >= 76 && chance <= 85) {
        document.getElementById('resultMessage').innerHTML = 'You have won 20 epic wild cards!';
    } else if (chance >= 86 && chance <= 95) {
        document.getElementById('resultMessage').innerHTML = 'You have won 1 legendary wild card!';
    } else if (chance >= 96 && chance <= 100) {
        document.getElementById('resultMessage').innerHTML = 'You have won 1 champion wild card!';
    }
}

function getEpicRewards() {
    chance = getRandomInt(1, 101);
    document.getElementById('resultPopup').style.display = 'block';
    if (chance >= 1 && chance <= 12) {
        document.getElementById('resultMessage').innerHTML = 'You have won a common book!';
    } else if (chance >= 13 && chance <= 23) {
        document.getElementById('resultMessage').innerHTML = 'You have won a rare book!';
    } else if (chance >= 24 && chance <= 30) {
        document.getElementById('resultMessage').innerHTML = 'You have won an epic book!';
    } else if (chance >= 31 && chance <= 50) {
        document.getElementById('resultMessage').innerHTML = 'You have won 5 legendary wild cards!';
    } else if (chance >= 51 && chance <= 70) {
        document.getElementById('resultMessage').innerHTML = 'You have won 3 champion wild cards!';
    } else if (chance >= 71 && chance <= 90) {
        document.getElementById('resultMessage').innerHTML = 'You have won 7500 elite wild cards!';
    } else if (chance >= 91 && chance <= 100) {
        document.getElementById('resultMessage').innerHTML = 'You have won 1 evolution wild shard!';
    }
}

function getLegendaryRewards() {
    chance = getRandomInt(1, 101);
    document.getElementById('resultPopup').style.display = 'block';
    if (chance >= 1 && chance <= 30) {
        document.getElementById('resultMessage').innerHTML = 'You have won 1 legendary book!';
    } else if (chance >= 31 && chance <= 60) {
        document.getElementById('resultMessage').innerHTML = 'You have won 1 book of books!';
    } else if (chance >= 61 && chance <= 90) {
        document.getElementById('resultMessage').innerHTML = 'You have won 50000 Elite Wild Cards!';
    } else if (chance >= 91 && chance <= 100) {
        const possibleEvos = ["Evo Barbarians", "Evo Royal Giant", "Evo Firecracker", "Evo Skeletons", "Evo Mortar", "Evo Knight", "Evo Royal Recruits", "Evo Bats", "Evo Archers", "Evo Ice Spirit", "Evo Valkyrie", "Evo Bomber", "Evo Wall Breakers", "Evo Tesla", "Evo Zap", "Evo Battle Ram", "Evo Wizard", "Evo Goblin Barrel", "Evo Goblin Giant"];
        let evo = getRandomInt(0, possibleEvos.length - 1);
        let evoStr = possibleEvos[evo];
        document.getElementById('resultMessage').innerHTML = `You have unlocked ${evoStr}!`;
    }
}

document.getElementById('activateButton').addEventListener('click', activateDot);

function closePopup() {
    document.getElementById('resultPopup').style.display = 'none';
}
