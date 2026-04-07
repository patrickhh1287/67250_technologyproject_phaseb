// =============================================
// Part 2 (Increment 3): JavaScript Basics
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

// Arrays + Loops
var L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
var L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "Banana") {
            alert("Found the Banana!");
        }
    }
}

// findTheBanana(L1);
// findTheBanana(L2);

function findTheBananaForEach(arr) {
    arr.forEach(function (item) {
        if (item === "Banana") {
            alert("Found the Banana with forEach!");
        }
    });
}

// findTheBananaForEach(L1);
// findTheBananaForEach(L2);

// =============================================
// Part 3 (Increment 3): Time-Based Greeting
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
// Part 4 (Increment 3): Dynamic Footer Year
// =============================================

function addYear() {
    var yearEl = document.getElementById("copyYear");
    if (yearEl) {
        var currentYear = new Date().getFullYear();
        yearEl.innerHTML = "&copy; " + currentYear + " MonoMuse. All rights reserved.";
    }
}

// =============================================
// Part 4 (Increment 4): Active Navigation Bar
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
// Part 5 (Increment 4): Read More / Read Less (jQuery)
// =============================================

// Only run jQuery code if jQuery is loaded (index.html only)
if (typeof $ !== "undefined") {
    $(document).ready(function () {
        // When "Read More" is clicked
        $("#readMore").click(function () {
            $("#longIntro").show();
            $("#readLess").show();
            $("#readMore").hide();
        });

        // When "Read Less" is clicked
        $("#readLess").click(function () {
            $("#longIntro").hide();
            $("#readLess").hide();
            $("#readMore").show();
        });
    });
}

// =============================================
// Part 6 (Increment 4): Show Purchase Form
// =============================================

function showPurchaseForm(date) {
    document.getElementById("purchaseForm").style.display = "block";
    if (date) {
        document.getElementById("selectedDate").value = date;
    }
}
