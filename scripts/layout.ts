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
    addBoxToggle("toggle-nav", "nav-region-expandable");
    addBoxToggle("toggle-insurance-box", "insurance-box-expandable");

    // Shows body once header and footer load
    const bodyRegion = document.getElementsByClassName("body-region")[0] as HTMLElement;
    bodyRegion.classList.remove("hidden");
}

function addBoxToggle(buttonID : string, boxID : string) {
    const toggleButton: HTMLElement | null = document.getElementById(buttonID);
    const expandableRegion: HTMLElement | null = document.getElementById(boxID);

    toggleButton?.addEventListener("click", (): void => {
        if (expandableRegion?.classList.contains("open")) {
            expandableRegion.classList.remove("open");
            
        } else {
            expandableRegion?.classList.add("open");
        }

    })
}

await setLayout()