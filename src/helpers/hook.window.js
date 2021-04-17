import { useEffect, useState } from "react"

export function useWindowSize(){
	const [windowSizes, setWindowSize] = useState({
		width: null,
		height: null,
	});

	useEffect(() => {
		function resizeHandler(){
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		window.addEventListener("resize", resizeHandler);
		//handleResize();
		return () => window.removeEventListener("resize", resizeHandler);
	}, []);

	return windowSizes;
}
