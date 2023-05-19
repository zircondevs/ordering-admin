import { useEffect, useState } from "react";




export const useScrollDir = (breakePoint?: number) => {
	const [scrollUpward, setScrollUpward] = useState(true);
	const [ aboveBreakPoint, setaboveBreakPoint] = useState(false);

    
	useEffect(() => {
		const threshold = 0;
		let lastScrollY = window.pageYOffset;
		let ticking = false;
        
		const updateScrollDir = () => {
			const scrollY = window.pageYOffset;
			if (Math.abs(scrollY - lastScrollY) < threshold) {
				ticking = false;
				return;
			}
			breakePoint && setaboveBreakPoint(scrollY > breakePoint);
			setScrollUpward(scrollY > lastScrollY ? false : true);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			ticking = false;
		};
		const onScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(updateScrollDir);
				ticking = true;
			}
		};
        
		window.addEventListener("scroll", onScroll);        
		return () => window.removeEventListener("scroll", onScroll);
	}, [scrollUpward, breakePoint]);

	return {scrollUpward,  aboveBreakPoint };
};