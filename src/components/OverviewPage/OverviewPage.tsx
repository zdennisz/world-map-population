import React, {
	useEffect,
	useState,
	useRef,
	ReactElement,
	useCallback,
} from "react";
import Spinner from "../Spinner/Spinner";
import ChartController from "../Chart/ChartController";

const OverviewPage = () => {
	const [isLoading, setIsLoading] = useState(true);

	return (
		<div>
			<>
				{isLoading ? <Spinner /> : null}
				<ChartController setIsLoading={setIsLoading} />
			</>
		</div>
	);
};

export default OverviewPage;
