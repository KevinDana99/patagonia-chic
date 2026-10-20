import { useEffect } from 'react';

const useConsole = () => {
	useEffect(() => {
		console.log('component updated');
	});
};

export default useConsole;
