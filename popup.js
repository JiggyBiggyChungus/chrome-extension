// html button to js
let button = document.getElementById("activate");

// Get the variable called "color" from storage //TODO: Don't fully understand syntax yet.

// When the button is clicked, inject setPageBackgroundColor into current page
button.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: newP(),
    });
});

// The body of this function will be executed as a content script inside the
// current page

function newP() {
    const para = document.createElement("p");
    const node = document.createTextNode("This is a paragraph.");
    para.appendChild(node);

    const element = document.body;
    element.appendChild(para);
}
