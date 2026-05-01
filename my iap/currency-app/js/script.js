// SIMPLE CURRENCY CONVERTER - Easy Version for Level 3 SOD

// ========== EXCHANGE RATES (1 RWF in other currencies) ==========
const rates = {
    "RDA": 1,        // Rwandan Franc
    "SHIR": 0.02,    // Shilingi
    "$$": 0.00077,   // Dollar
    "EUR": 0.00071   // Euro
};

// ========== CURRENCY NAMES ==========
const names = {
    "RDA": "Rwandan Francs",
    "SHIR": "Shilingi",
    "$$": "Dollars",
    "EUR": "Euro"
};

// ========== 1. CONVERT MONEY ==========
function convert() {
    // Get values from the page
    let amount = document.getElementById("amount").value;
    let fromCurrency = document.getElementById("fromcurrency").value;
    let toCurrency = document.getElementById("tocurrency").value;
    
    // Check if amount is valid
    if (amount <= 0 || amount === "") {
        alert("Please enter a valid amount");
        return;
    }
    
    amount = parseFloat(amount);
    
    // Step 1: Convert to RWF first
    let amountInRWF = amount / rates[fromCurrency];
    
    // Step 2: Convert from RWF to target currency
    let result = amountInRWF * rates[toCurrency];
    
    // Show result
    let message = amount + " " + names[fromCurrency] + " = " + result.toFixed(2) + " " + names[toCurrency];
    document.getElementById("result").innerHTML = message;
    
    // Save to history
    saveHistory(message);
}

// ========== 2. SWAP CURRENCIES ==========
function swap() {
    let from = document.getElementById("fromcurrency");
    let to = document.getElementById("tocurrency");
    
    let temp = from.value;
    from.value = to.value;
    to.value = temp;
    
    convert(); // Convert again after swap
}

// ========== 3. HISTORY FUNCTIONS ==========
function saveHistory(text) {
    let oldHistory = localStorage.getItem("history");
    
    if (oldHistory) {
        localStorage.setItem("history", text + "|" + oldHistory);
    } else {
        localStorage.setItem("history", text);
    }
}

function showHistory() {
    let box = document.getElementById("historyList");
    if (!box) return;
    
    let history = localStorage.getItem("history");
    
    if (!history) {
        box.innerHTML = "<p>No history yet. Convert some money!</p>";
        return;
    }
    
    let items = history.split("|");
    box.innerHTML = "<h3>Conversion History</h3>";
    
    for (let i = 0; i < items.length; i++) {
        if (items[i]) {
            box.innerHTML += "<p>" + (i+1) + ". " + items[i] + "</p>";
        }
    }
}

function clearHistory() {
    if (confirm("Clear all history?")) {
        localStorage.removeItem("history");
        showHistory();
        alert("History cleared!");
    }
}

// ========== 4. DARK/LIGHT MODE (Simple Version) ==========
function darkMode() {
    // Body
    document.body.style.backgroundColor = "#1a1a2e";
    document.body.style.color = "white";
    
    // Header
    let header = document.querySelector("header");
    if (header) header.style.backgroundColor = "#0f3460";
    
    // Navigation
    let nav = document.querySelector("nav");
    if (nav) nav.style.backgroundColor = "#16213e";
    
    // Buttons
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#1a1a2e";
        buttons[i].style.color = "white";
    }
    
    // Inputs and dropdowns
    let inputs = document.querySelectorAll("input, select");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "#2a2a3e";
        inputs[i].style.color = "white";
    }
    
    // Result box
    let result = document.getElementById("result");
    if (result) {
        result.style.backgroundColor = "#2a2a3e";
        result.style.color = "#ddd";
    }
    
    // History items
    let historyItems = document.querySelectorAll("#historyList p");
    for (let i = 0; i < historyItems.length; i++) {
        historyItems[i].style.backgroundColor = "#2a2a3e";
        historyItems[i].style.color = "#ddd";
    }
    
    // List items (for details page)
    let listItems = document.querySelectorAll("ul li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = "#2a2a3e";
        listItems[i].style.color = "#ddd";
    }
    
    // Footer
    let footer = document.querySelector("footer");
    if (footer) footer.style.backgroundColor = "#0f3460";
    
    // Headings
    let headings = document.querySelectorAll("h1, h2, h3, h4");
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = "#a0c4ff";
    }
    
    // Save choice
    localStorage.setItem("theme", "dark");
}

function lightMode() {
    // Body
    document.body.style.backgroundColor = "#f5f5f5";
    document.body.style.color = "black";
    
    // Header
    let header = document.querySelector("header");
    if (header) header.style.backgroundColor = "#003366";
    
    // Navigation
    let nav = document.querySelector("nav");
    if (nav) nav.style.backgroundColor = "white";
    
    // Buttons
    let buttons = document.querySelectorAll("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "#003366";
        buttons[i].style.color = "white";
    }
    
    // Inputs and dropdowns
    let inputs = document.querySelectorAll("input, select");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].style.backgroundColor = "white";
        inputs[i].style.color = "black";
    }
    
    // Result box
    let result = document.getElementById("result");
    if (result) {
        result.style.backgroundColor = "#e6f0ff";
        result.style.color = "#003366";
    }
    
    // History items
    let historyItems = document.querySelectorAll("#historyList p");
    for (let i = 0; i < historyItems.length; i++) {
        historyItems[i].style.backgroundColor = "#f0f0f0";
        historyItems[i].style.color = "black";
    }
    
    // List items (for details page)
    let listItems = document.querySelectorAll("ul li");
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].style.backgroundColor = "#f0f0f0";
        listItems[i].style.color = "black";
    }
    
    // Footer
    let footer = document.querySelector("footer");
    if (footer) footer.style.backgroundColor = "#333";
    
    // Headings
    let headings = document.querySelectorAll("h1, h2, h3, h4");
    for (let i = 0; i < headings.length; i++) {
        headings[i].style.color = "#003366";
    }
    
    // Save choice
    localStorage.setItem("theme", "light");
}

// ========== 5. LOAD SAVED THEME WHEN PAGE OPENS ==========
function loadTheme() {
    let theme = localStorage.getItem("theme");
    if (theme === "dark") {
        darkMode();
    } else {
        lightMode();
    }
}

// ========== 6. RESET EVERYTHING ==========
function resetAll() {
    if (confirm("Delete ALL data? This cannot be undone!")) {
        localStorage.clear();
        alert("All data cleared!");
        location.reload();
    }
}

// ========== 7. START WHEN PAGE LOADS ==========
window.onload = function() {
    loadTheme();      // Load dark or light mode
    showHistory();    // Show history if on history page
};