export function getSlideshowImages(slideshowImageCount) {
    const result = [];
    for (let i = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`img-${i}`);
    }
    return result;
}
export function getSlideshowDots(slideshowImageCount) {
    const result = [];
    for (let i = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`slideshow-dot-${i}`);
    }
    return result;
}
export function activateSlideshowElement(element) {
    element.classList.add("active");
}
export function deactivateSlideshowElement(element) {
    element.classList.remove("active");
}
export function wrapIncrement(curr, listLength) {
    if (curr >= listLength || curr < 0 || listLength < 0) {
        throw new TypeError('Invalid argument');
    }
    if (curr >= listLength - 1) {
        return 0;
    }
    else {
        return ++curr;
    }
}
export function wrapDecrement(curr, listLength) {
    if (curr >= listLength || curr < 0 || listLength < 0) {
        throw new TypeError('Invalid argument');
    }
    if (curr <= 0) {
        return --listLength;
    }
    else {
        return --curr;
    }
}
export function updateActiveElement(oldIndex, newIndex, elementList) {
    let currSlideshowElement = elementList[oldIndex];
    if (currSlideshowElement) {
        deactivateSlideshowElement(currSlideshowElement);
    }
    currSlideshowElement = elementList[newIndex];
    if (currSlideshowElement) {
        activateSlideshowElement(currSlideshowElement);
    }
}
export function activateNextSlideshowElement(currElementIndex, elementList, dotList) {
    const tempSlideshowElementIndex = wrapIncrement(currElementIndex, Object.keys(elementList).length);
    updateActiveElement(currElementIndex, tempSlideshowElementIndex, elementList);
    updateActiveElement(currElementIndex, tempSlideshowElementIndex, dotList);
}
export async function slideshowMain(imageCount) {
    const slideshowImages = getSlideshowImages(imageCount);
    const slideshowDots = getSlideshowDots(imageCount);
    const leftButton = document.getElementById("left-slideshow-arrow");
    const rightButton = document.getElementById("right-slideshow-arrow");
    let currSlideshowElementIndex = 0;
    // Automatic Movement
    function resetAutomaticMovement() {
        const tempSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);
        activateNextSlideshowElement(currSlideshowElementIndex, slideshowImages, slideshowDots);
        currSlideshowElementIndex = tempSlideshowElementIndex;
    }
    let movementInterval = setInterval(() => {
        resetAutomaticMovement();
    }, 3000);
    // Slideshow Arrows
    leftButton.addEventListener("click", () => {
        const tempSlideshowElementIndex = wrapDecrement(currSlideshowElementIndex, imageCount);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);
        currSlideshowElementIndex = tempSlideshowElementIndex;
        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
        }, 3000);
    });
    rightButton.addEventListener("click", () => {
        const tempSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);
        currSlideshowElementIndex = tempSlideshowElementIndex;
        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
        }, 3000);
    });
    // Slideshow Dots
    const slideshowDot0 = slideshowDots[0];
    const slideshowDot1 = slideshowDots[1];
    const slideshowDot2 = slideshowDots[2];
    slideshowDot0.addEventListener("click", () => {
        updateActiveElement(currSlideshowElementIndex, 0, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, 0, slideshowDots);
        currSlideshowElementIndex = 0;
        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
        }, 3000);
    });
    slideshowDot1.addEventListener("click", () => {
        updateActiveElement(currSlideshowElementIndex, 1, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, 1, slideshowDots);
        currSlideshowElementIndex = 1;
        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
        }, 3000);
    });
    slideshowDot2.addEventListener("click", () => {
        updateActiveElement(currSlideshowElementIndex, 2, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, 2, slideshowDots);
        currSlideshowElementIndex = 2;
        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
        }, 3000);
    });
}
export function main() {
    slideshowMain(6);
}
//# sourceMappingURL=slideshow.js.map