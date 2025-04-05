document.addEventListener("DOMContentLoaded", function () {
    // Navigate from home.html to about.html
    const aboutusBtn = document.getElementById("aboutus");
    if (aboutusBtn) {
        aboutusBtn.addEventListener("click", function () {
            window.location.href = "about.html";
        });
    }
    const lawyerBtn = document.getElementById("lawyer");
    if (lawyerBtn) {
        lawyerBtn.addEventListener("click", function () {
            window.location.href = "lawyer.html";
        });
    }
    const contactBtn = document.getElementById("contact");
    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            window.location.href = "contact.html";
        });
    }

    const casesBtn = document.getElementById("cases");
    if (casesBtn) {
        casesBtn.addEventListener("click", function () {
            window.location.href = "cases.html";
        });
    }

    const homeBtn = document.getElementById("home");
    if (homeBtn) {
        homeBtn.addEventListener("click", function () {
            window.location.href = "home.html";
        });
    }

    const defendBtn = document.getElementById("defend");
    if (defendBtn) {
        defendBtn.addEventListener("click", function () {
            window.location.href = "defend.html";
        });
    }
});


document.addEventListener("DOMContentLoaded", function() {
    // Get the search button
    const searchButton = document.getElementById("search1");

    if (searchButton) {
        searchButton.addEventListener("click", function() {
            // Get input values
            const practiceArea = document.querySelector("input[placeholder='Practice Area']").value;
            const location = document.querySelector("input[placeholder='Location']").value;

            // Simple validation
            if (practiceArea === "" || location === "") {
                alert("Please enter both practice area and location.");
                return;
            }

            // Redirect to a search results page (or handle search logic)
            alert(`Searching for ${practiceArea} lawyers in ${location}`);
            
            // If you have a results page, use:
            window.location.href = `lawyerprof.html?practice=${practiceArea}&location=${location}`;
        });
    }
});

// Store local HTML file paths
const data = {
    "copy": "trademark.html",
    "copyright":"trademark.html",
    "copying":"trademark.html",
    "property": "property.html",
    
};

function extractKeywords(sentence) {
    let words = sentence.toLowerCase().split(" ");
    let keywords = words.filter(word => data.hasOwnProperty(word)); // Find matching words in stored data
    return keywords;
}

function processInput() {
    const input = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    let keywords = extractKeywords(input);
    if (keywords.length === 0) {
        responseElement.innerText = "No matching information found.";
        return;
    }

    // Create links to local HTML files
    window.location.href = data[keywords[0]]
}
