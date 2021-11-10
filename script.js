var cums = 0;
//cums = localStorage.getItem("cums");
var clickPower = 1;
var cumPerSecond = 0;

var doubleUpgradeBaseCost = 100;
var doubleUpgradeCost = doubleUpgradeBaseCost;
var doubleUpgradeLevel = 0;
var doubleUpgradeIterator = 0;


var wankerCount = 0//localStorage.getItem("wankerCount");
var wankerBaseCost = 15;
var wankerCost = wankerBaseCost;
var wankerBaseCps = 0.1;
var wankerCps = 0;
var wankerUnlockRequirement = 0;
var wankerUnlocked = true;

var chadCount = 0//localStorage.getItem("chadCount");
var chadBaseCost = 100;
var chadCost = chadBaseCost;
var chadBaseCps = 1;
var chadCps = 0;
var chadUnlockRequirement = 100;
var chadUnlocked = false;

var treeCount = 0//localStorage.getItem("treeCount");
var treeBaseCost = 1200;
var treeCost = treeBaseCost;
var treeBaseCps = 8;
var treeCps = 0;
var treeUnlockRequirement = 1200;
var treeUnlocked = false;

var mineCount = 0//localStorage.getItem("mineCount");
var mineBaseCost = 12000;
var mineCost = mineBaseCost;
var mineBaseCps = 47;
var mineCps = 0;
var mineUnlockRequirement = 12000;
var mineUnlocked = false;

function doubleUpgrade(unlocked) {
    if (cums >= doubleUpgradeCost) {
        cums -= doubleUpgradeCost;
        doubleUpgradeLevel++;

        wankerBaseCps *= 2;
        chadBaseCps *= 2;
        treeBaseCps *= 2;

        wankerCps *= 2;
        chadCps *= 2;
        treeCps *= 2;

        clickPower *= 2;
        doubleUpgradeCost *= 5;
        document.getElementById("doubleUpgradeCost").innerHTML = doubleUpgradeCost;
    }
}

function updateUpgrades() {
    if (doubleUpgradeCost > cums)
        document.getElementById("doubleUpgradeCost").style.color = "red";
    else
        document.getElementById("doubleUpgradeCost").style.color = "green";
    document.getElementById("doubleUpgradeCost").innerHTML = doubleUpgradeCost;
    document.getElementById("doubleUpgradeLevel").innerHTML = doubleUpgradeLevel;
}

function penisClicked() {
    cums += clickPower;
}

function buyWanker() {
    if (cums >= wankerCost) {
        cums -= wankerCost;
        wankerCount += 1;
        wankerCps += wankerBaseCps;
        wankerCost = Math.ceil(wankerBaseCost * 1.15 ** wankerCount);
        cumPerSecond += wankerCps;
    }
}

function buyChad() {
    if (cums >= chadCost) {
        cums -= chadCost;
        chadCount += 1;
        chadCps += chadBaseCps;
        chadCost = Math.ceil(chadBaseCost * 1.15 ** chadCount);
        cumPerSecond += chadCps;
    }
}

function buyTree() {
    if (cums >= treeCost) {
        cums -= treeCost;
        treeCount += 1;
        treeCps += treeBaseCps;
        treeCost = Math.ceil(treeBaseCost * 1.15 ** treeCount);
        cumPerSecond += treeCps;
    }
}

function buyMine() {
    if (cums >= mineCost) {
        cums -= mineCost;
        mineCount += 1;
        mineCps += mineBaseCps;
        mineCost = Math.ceil(mineBaseCost * 1.15 ** mineCount);
        cumPerSecond += mineCps;
    }
}

function wankerUpdate() {
    if (wankerCost > cums)
        document.getElementById("wankerCost").style.color = "red";
    else
        document.getElementById("wankerCost").style.color = "green";
    document.getElementById("wankerCount").innerHTML = wankerCount;
    document.getElementById("wankerCost").innerHTML = wankerCost;
    //localStorage.setItem("wankerCount",wankerCount);
}

function chadUpdate() {
    if (chadCost > cums)
        document.getElementById("chadCost").style.color = "red";
    else
        document.getElementById("chadCost").style.color = "green";
    document.getElementById("chadCount").innerHTML = chadCount;
    document.getElementById("chadCost").innerHTML = chadCost;
    //localStorage.setItem("chadCount",chadCount);
}

function treeUpdate() {
    if (treeCost > cums)
        document.getElementById("treeCost").style.color = "red";
    else
        document.getElementById("treeCost").style.color = "green";
    document.getElementById("treeCount").innerHTML = treeCount;
    document.getElementById("treeCost").innerHTML = treeCost;
    //localStorage.setItem("treeCount",treeCount);
}

function mineUpdate() {
    if (mineCost > cums)
        document.getElementById("mineCost").style.color = "red";
    else
        document.getElementById("mineCost").style.color = "green";
    document.getElementById("mineCount").innerHTML = mineCount;
    document.getElementById("mineCost").innerHTML = mineCost;
    //localStorage.setItem("mineCount",mineCount);
}

function CheckForUnlock() {
    if (cums >= wankerUnlockRequirement)
        wankerUnlocked = true;
    if (cums >= chadUnlockRequirement)
        chadUnlocked = true;
    if (cums >= treeUnlockRequirement)
        treeUnlocked = true;
    if (cums >= mineUnlockRequirement)
        mineUnlocked = true
}

function SetDisplayOfBuildings() {
    if (wankerUnlocked) {
        document.getElementById("wanker").src = "wanker.jpg";
    }
    else
        document.getElementById("wanker").src = "question mark.jpg";

    if (chadUnlocked) {
        document.getElementById("chad").src = "Chad.jpg";
        document.getElementById("ChadNameName").innerHTML = "Chad";
        document.getElementById("ChadNameCost").innerHTML = "Chad";
    }
    else {
        document.getElementById("chad").src = "question mark.jpg";
        document.getElementById("ChadNameName").innerHTML = "???"
        document.getElementById("ChadNameCost").innerHTML = "???";
    }

    if (treeUnlocked) {
        document.getElementById("tree").src = "cum tree.jpg";
        document.getElementById("TreeNameName").innerHTML = "Cum Tree";
        document.getElementById("TreeNameCost").innerHTML = "Cum Tree";
    }
    else {
        document.getElementById("tree").src = "question mark.jpg";
        document.getElementById("TreeNameName").innerHTML = "???"
        document.getElementById("TreeNameCost").innerHTML = "???";
    }

    if (mineUnlocked) {
        document.getElementById("mine").src = "cum mine.jpg";
        document.getElementById("mineNameName").innerHTML = "Cum mine";
        document.getElementById("mineNameCost").innerHTML = "Cum mine";
    }
    else {
        document.getElementById("mine").src = "question mark.jpg";
        document.getElementById("mineNameName").innerHTML = "???"
        document.getElementById("mineNameCost").innerHTML = "???";
    }

}

function DisplayBuildings() {
    if (wankerUnlocked)
        document.getElementById("Chad Box").style.display = "block"
    else
        document.getElementById("Chad Box").style.display = "none"

    if (chadUnlocked)
        document.getElementById("Tree Box").style.display = "block"
    else
        document.getElementById("Tree Box").style.display = "none"
    
    if (treeUnlocked)
        document.getElementById("Mine Box").style.display = "block"
    else
        document.getElementById("Mine Box").style.display = "none"
}

function SetTitle() {
    if (cums < 1)
        document.title = "Penis Clicker";
    else
        document.title = cums.toFixed(0) + " Cums Penis Clicker";
}

function ResetEverything() {
    localStorage.setItem("cums", 0)
    localStorage.setItem("wankerCount", 0)
    localStorage.setItem("chadCount", 0)
    localStorage.setItem("treeCount", 0)
    localStorage.setItem("mineCount", 0)
}

function updateCps() {
    cumPerSecond = wankerCps + chadCps + treeCps + mineCps;
}

function incrementCums() {
    cums += cumPerSecond / 100;
    document.getElementById("cumPerSecond").innerHTML = cumPerSecond.toFixed(1);
    document.getElementById("cumCount").innerHTML = cums.toFixed(0);
}

function update() {
    //localStorage.setItem("cums",cums);
    updateCps()
    incrementCums()
    wankerUpdate()
    chadUpdate()
    treeUpdate()
    mineUpdate()
    CheckForUnlock()
    SetDisplayOfBuildings()
    DisplayBuildings()
    SetTitle()
    updateUpgrades()
}

setInterval(update, 10)