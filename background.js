// background.js --> Handle background services

// Set variable
let color = '#3aa757';

// On installed:
chrome.runtime.onInstalled.addListener(() => {
    // Put in storage
    chrome.storage.sync.set({ color });

    // Output on console DEBUGGING
    console.log('%cThis is the color', `This is the color: ${color}`);
})
