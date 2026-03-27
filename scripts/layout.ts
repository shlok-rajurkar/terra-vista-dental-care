// Sets active nav item

async function setActiveNav() {

    const pageNavItemIdDictionary: Record<string, string | undefined> = {
        "Home": "nav-home",
        "Our Doctors": "nav-doctors",
        "Services Offered": "nav-services",
        "Specials": "nav-specials",
        "Insurances": "nav-insurances",
        "Patient Resources": "nav-resources",
        "Contact Us": "nav-contact"
    }

    // Sets nav tab to active depending on page

    const title: string = document.title;
    for (const key in pageNavItemIdDictionary) {
        if (title === key) {
            const elementID: string | undefined = pageNavItemIdDictionary[key];
            let navItem: HTMLElement | null = null;
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

    setActiveNav()
    addNavToggle();

    // Shows body once header and footer load
    const bodyRegion = document.getElementsByClassName("body-region")[0] as HTMLElement;
    bodyRegion.classList.remove("hidden");
}

function addNavToggle() {
    const toggleNav: HTMLElement | null = document.getElementById("toggle-nav");
    const navRegion: HTMLElement | null = document.getElementById("nav-region-expandable");

    toggleNav?.addEventListener("click", (): void => {
        if (navRegion?.classList.contains("open")) {
            navRegion.classList.remove("open");
        } else {
            navRegion?.classList.add("open");
            console.log("hi");
        }

    })


}

await setLayout()