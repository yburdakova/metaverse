import { useState, useEffect } from 'react';

export default function useWindowSizes() {

    const hasWindow = typeof window !== 'undefined';

    function getWindowSizes() {
        const width = hasWindow ? window.innerWidth : null;
        const height = hasWindow ? window.innerHeight : null;
        return {
        width,
        height,
        };
    }

    const [windowSizes, setWindowSizes] = useState(getWindowSizes());

    useEffect(() => {
        if (hasWindow) {
        function handleResize() {
            setWindowSizes(getWindowSizes());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        }
    }, [hasWindow]);

    return windowSizes;
}

