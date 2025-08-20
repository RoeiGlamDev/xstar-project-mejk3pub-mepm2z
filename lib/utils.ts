```typescript
// lib/utils.ts

export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`;
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
};

export const throttle = (func: Function, limit: number) => {
    let lastFunc: NodeJS.Timeout;
    let lastRan: number;
    return function (...args: any[]) {
        if (!lastRan) {
            func(...args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if ((Date.now() - lastRan) >= limit) {
                    func(...args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

export const isMobileDevice = (): boolean => {
    return /Mobi|Android/i.test(navigator.userAgent);
};

export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const smoothScrollTo = (target: HTMLElement, duration: number) => {
    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        window.scrollTo(0, start + distance * progress);
        if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
};

export const create3DEffect = (element: HTMLElement, depth: number) => {
    element.style.transform = `translateZ(${depth}px)`;
    element.style.transition = 'transform 0.3s ease';
};

export const setThemeColors = () => {
    document.documentElement.style.setProperty('--primary-color', '#FFA500'); // Orange
    document.documentElement.style.setProperty('--secondary-color', '#FFFFFF'); // White
};
```