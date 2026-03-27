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
    addNavToggle();
    // Shows body once header and footer load
    const bodyRegion = document.getElementsByClassName("body-region")[0];
    bodyRegion.classList.remove("hidden");
}
function addNavToggle() {
    const toggleNav = document.getElementById("toggle-nav");
    const navRegion = document.getElementById("nav-region-expandable");
    toggleNav?.addEventListener("click", () => {
        if (navRegion?.classList.contains("open")) {
            navRegion.classList.remove("open");
        }
        else {
            navRegion?.classList.add("open");
            console.log("hi");
        }
    });
}
await setLayout();
export {};
//# sourceMappingURL=layout.js.map