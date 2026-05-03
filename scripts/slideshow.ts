export function getSlideshowImages(slideshowImageCount: number): Record<number, HTMLElement | null> {
    const result: Record<number, HTMLElement | null> = [];
    for (let i: number = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`img-${i}`)
    }
    return result;
}

export function getSlideshowDots(slideshowImageCount: number): Record<number, HTMLElement | null> {
    const result: Record<number, HTMLElement | null> = [];
    for (let i: number = 0; i < slideshowImageCount; i++) {
        result[i] = document.getElementById(`slideshow-dot-${i}`);
    }
    return result;
}

export function activateSlideshowElement(element: HTMLElement): void {
    element.classList.add("active");
}

export function deactivateSlideshowElement(element: HTMLElement): void {
    element.classList.remove("active");
}

export function wrapIncrement(curr: number, listLength: number): number {
    if (curr >= listLength || curr < 0 || listLength < 0) {
        throw new TypeError('Invalid argument');
    }
    if (curr >= listLength - 1) {
        return 0;
    } else {
        return ++curr;
    }
}

export function wrapDecrement(curr: number, listLength: number): number {
    if (curr >= listLength || curr < 0 || listLength < 0) {
        throw new TypeError('Invalid argument')
    }
    if (curr <= 0) {
        return --listLength;
    } else {
        return --curr;
    }
}

export function updateActiveElement(oldIndex: number, newIndex: number, elementList: Record<number, HTMLElement | null>): void {
    let currSlideshowElement = elementList[oldIndex];
    if (currSlideshowElement) {
        deactivateSlideshowElement(currSlideshowElement);
    }

    currSlideshowElement = elementList[newIndex];
    if (currSlideshowElement) {
        activateSlideshowElement(currSlideshowElement);
    }
}

export function activateNextSlideshowElement(currElementIndex: number,
    elementList: Record<number, HTMLElement | null>,
    dotList: Record<number, HTMLElement | null>
): void{
    const tempSlideshowElementIndex = wrapIncrement(currElementIndex, Object.keys(elementList).length)
    updateActiveElement(currElementIndex, tempSlideshowElementIndex, elementList);
    updateActiveElement(currElementIndex, tempSlideshowElementIndex, dotList);
}

export async function slideshowMain(imageCount: number): Promise<void> {
    const slideshowImages = getSlideshowImages(imageCount);
    const slideshowDots = getSlideshowDots(imageCount);

    const leftButton: HTMLButtonElement | null = document.getElementById("left-slideshow-arrow") as HTMLButtonElement;
    const rightButton: HTMLButtonElement | null = document.getElementById("right-slideshow-arrow") as HTMLButtonElement;
    
    let currSlideshowElementIndex: number = 0;

    // Automatic Movement

    function resetAutomaticMovement(): void {
        const tempSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);
        activateNextSlideshowElement(currSlideshowElementIndex, slideshowImages, slideshowDots);
        currSlideshowElementIndex = tempSlideshowElementIndex;
    }

    let movementInterval = setInterval(() => {
        resetAutomaticMovement();
    }, 3000);
    
    // Slideshow Arrows

    leftButton.addEventListener("click", (): void => {
        const tempSlideshowElementIndex = wrapDecrement(currSlideshowElementIndex, imageCount);
        
        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);

        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);

        currSlideshowElementIndex = tempSlideshowElementIndex;

        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
    }, 3000);
    })
    rightButton.addEventListener("click", (): void => {
        const tempSlideshowElementIndex = wrapIncrement(currSlideshowElementIndex, imageCount);

        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowImages);

        updateActiveElement(currSlideshowElementIndex, tempSlideshowElementIndex, slideshowDots);

        currSlideshowElementIndex = tempSlideshowElementIndex;

        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
    }, 3000);
    })

    // Slideshow Dots

    for (let i : number = 0; i < imageCount; i++) {
        const dot = slideshowDots[i] as HTMLButtonElement;
        dot.addEventListener("click", (): void => {
        updateActiveElement(currSlideshowElementIndex, i, slideshowImages);
        updateActiveElement(currSlideshowElementIndex, i, slideshowDots);
        currSlideshowElementIndex = i;

        clearInterval(movementInterval);
        movementInterval = setInterval(() => {
            resetAutomaticMovement();
            }, 3000);
        })
    }

    // const slideshowDot0 = slideshowDots[0] as HTMLButtonElement;
    // const slideshowDot1 = slideshowDots[1] as HTMLButtonElement;
    // const slideshowDot2 = slideshowDots[2] as HTMLButtonElement;
    // const slideshowDot3 = slideshowDots[3] as HTMLButtonElement;
    // const slideshowDot4 = slideshowDots[4] as HTMLButtonElement;
    // const slideshowDot5 = slideshowDots[5] as HTMLButtonElement;





    // slideshowDot1.addEventListener("click", (): void => {
    //     updateActiveElement(currSlideshowElementIndex, 1, slideshowImages);
    //     updateActiveElement(currSlideshowElementIndex, 1, slideshowDots);
    //     currSlideshowElementIndex = 1;

    //     clearInterval(movementInterval);
    //     movementInterval = setInterval(() => {
    //         resetAutomaticMovement();
    // }, 3000);
    // })

    // slideshowDot2.addEventListener("click", (): void => {
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowImages);
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowDots);
    //     currSlideshowElementIndex = 2;

    //     clearInterval(movementInterval);
    //     movementInterval = setInterval(() => {
    //         resetAutomaticMovement();
    // }, 3000);
    // })
    // slideshowDot3.addEventListener("click", (): void => {
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowImages);
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowDots);
    //     currSlideshowElementIndex = 2;

    //     clearInterval(movementInterval);
    //     movementInterval = setInterval(() => {
    //         resetAutomaticMovement();
    // }, 3000);
    // })
    // slideshowDot4.addEventListener("click", (): void => {
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowImages);
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowDots);
    //     currSlideshowElementIndex = 2;

    //     clearInterval(movementInterval);
    //     movementInterval = setInterval(() => {
    //         resetAutomaticMovement();
    // }, 3000);
    // })
    // slideshowDot5.addEventListener("click", (): void => {
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowImages);
    //     updateActiveElement(currSlideshowElementIndex, 2, slideshowDots);
    //     currSlideshowElementIndex = 2;

    //     clearInterval(movementInterval);
    //     movementInterval = setInterval(() => {
    //         resetAutomaticMovement();
    // }, 3000);
    // })

}

export function main(): void {
    slideshowMain(8);
}