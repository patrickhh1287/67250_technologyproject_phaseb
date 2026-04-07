// =============================================
// Part 2: JavaScript Basics (Console Practice)
// =============================================

var x = 5;
var y = 7;
var z = x + y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Found the Banana!");
        }
    }
}

function findTheBananaForEach(arr) {
    arr.forEach(function (item) {
        if (item === "Banana") {
            alert("Found the Banana with forEach!");
        }
    });
}

// =============================================
// Part 3: Time-Based Greeting (DOM Manipulation)
// =============================================

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingEl = document.getElementById("greeting");
    if (greetingEl) {
        if (h < 5 || h >= 20) {
            greetingEl.innerHTML = "Good night, welcome to MonoMuse";
        } else if (h < 12) {
            greetingEl.innerHTML = "Good morning, welcome to MonoMuse";
        } else if (h < 18) {
            greetingEl.innerHTML = "Good afternoon, welcome to MonoMuse";
        } else {
            greetingEl.innerHTML = "Good evening, welcome to MonoMuse";
        }
    }
}

greeting(hour);

// =============================================
// Part 4: Dynamic Footer Year (All Pages)
// =============================================

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        var currentYear = new Date().getFullYear();
        yearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
    }
}

// =============================================
// Increment 4 - Active Navigation Bar
// =============================================

function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

// =============================================
// Increment 4 - Buy Tickets: Show Purchase Form
// =============================================

function showPurchaseForm() {
    var form = document.getElementById("purchaseForm");
    if (form) {
        form.style.display = "block";
    }
}

function submitTickets() {
    alert("Redirecting to payment system.");
}

// =============================================
// Increment 4 - jQuery Read More / Read Less
// =============================================

if (typeof $ !== "undefined") {
    $(document).ready(function () {
        $("#readMore").click(function () {
            $("#longIntro").show();
            $("#readLess").show();
            $("#readMore").hide();
        });

        $("#readLess").click(function () {
            $("#longIntro").hide();
            $("#readLess").hide();
            $("#readMore").show();
        });
    });
}

// =============================================
// Increment 5 - Responsive Hamburger Nav Toggle
// =============================================

function toggleNav() {
    var navbar = document.querySelector(".nav_bar");
    if (navbar) {
        navbar.classList.toggle("responsive");
    }
}

// =============================================
// Increment 5 - Leaflet Map (OpenStreetMap API)
// =============================================

var mapContainer = document.getElementById("map");

if (mapContainer && typeof L !== "undefined") {
    var currentpage = L.map('map').setView([40.4433, -79.9436], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(currentpage);

    L.marker([40.4433, -79.9436]).addTo(currentpage)
        .bindPopup('<b>MonoMuse</b><br>Pittsburgh, PA')
        .openPopup();
}
