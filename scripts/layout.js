// Sets active nav item
async function setActiveNav() {
    const pageNavItemIdDictionary = {
        "Home": "nav-home",
        "Our Doctors": "nav-doctors",
        "Services Offered": "nav-services",
        "Specials": "nav-specials",
        "Insurances": "nav-insurances",
        "Patient Resources": "nav-resources",
        "Contact Us": "nav-contact"
    };
    // Sets nav tab to active depending on page
    const title = document.title;
    for (const key in pageNavItemIdDictionary) {
        if (title === key) {
            const elementID = pageNavItemIdDictionary[key];
            let navItem = null;
            if (elementID) {
                navItem = document.getElementById(elementID);
            }
            if (navItem) {
                navItem.classList.add("active");
            }
        }
    }
}
async function setLayout() {
    setActiveNav();
    addBoxToggle("toggle-nav", "nav-region-expandable");
    addBoxToggle("toggle-insurance-box", "insurance-box-expandable");
    // Shows body once header and footer load
    const bodyRegion = document.getElementsByClassName("body-region")[0];
    bodyRegion.classList.remove("hidden");
}
function addBoxToggle(buttonID, boxID) {
    const toggleButton = document.getElementById(buttonID);
    const expandableRegion = document.getElementById(boxID);
    toggleButton?.addEventListener("click", () => {
        if (expandableRegion?.classList.contains("open")) {
            expandableRegion.classList.remove("open");
        }
        else {
            expandableRegion?.classList.add("open");
        }
    });
}
await setLayout();
export {};
//# sourceMappingURL=layout.js.map