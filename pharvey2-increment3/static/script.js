// =============================================
// Part 2: JavaScript Basics (Console Practice)
// =============================================

// Variable Declarations and Console Output
var x = 5;
var y = 7;
var z = x + y;
console.log(z);

// String Concatenation
var A = "Hello ";
var B = "world!";
var C = A + B;
console.log(C);

// Create a Basic Function
function sumnPrint(x1, x2) {
    console.log(x1 + x2);
}

sumnPrint(x, y);
sumnPrint(A, B);

// Add a Conditional Statement
if (C.length > z) {
    console.log(C);
} else if (C.length < z) {
    console.log(z);
} else {
    console.log("good job!");
}

// Arrays + Loops (Alerts)
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

// findTheBanana using a for loop
function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Found the Banana!");
        }
    }
}

// Uncomment the lines below to test the for loop version:
// findTheBanana(L1);
// findTheBanana(L2);

// findTheBanana rewritten using forEach
function findTheBananaForEach(arr) {
    arr.forEach(function (item) {
        if (item === "Banana") {
            alert("Found the Banana with forEach!");
        }
    });
}

// Uncomment the lines below to test the forEach version:
// findTheBananaForEach(L1);
// findTheBananaForEach(L2);

// =============================================
// Part 3: Time-Based Greeting (DOM Manipulation)
// =============================================

var now = new Date();
var hour = now.getHours();

function greeting(h) {
    var greetingEl = document.getElementById("greeting");
    // Only run if the greeting element exists on this page
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
