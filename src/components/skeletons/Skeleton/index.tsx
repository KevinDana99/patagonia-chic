import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
	<ContentLoader
		speed={2}
		width={300}
		height={380}
		viewBox="0 0 300 380"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="62" y="8" rx="3" ry="3" width="88" height="6" />
		<rect x="63" y="27" rx="3" ry="3" width="52" height="6" />
		<rect x="2" y="4" rx="8" ry="8" width="50" height="50" />
		<rect x="62" y="68" rx="3" ry="3" width="88" height="6" />
		<rect x="63" y="87" rx="3" ry="3" width="52" height="6" />
		<rect x="2" y="64" rx="8" ry="8" width="50" height="50" />
		<rect x="62" y="127" rx="3" ry="3" width="88" height="6" />
		<rect x="63" y="146" rx="3" ry="3" width="52" height="6" />
		<rect x="2" y="123" rx="8" ry="8" width="50" height="50" />
		<rect x="63" y="187" rx="3" ry="3" width="88" height="6" />
		<rect x="64" y="206" rx="3" ry="3" width="52" height="6" />
		<rect x="3" y="183" rx="8" ry="8" width="50" height="50" />
		<rect x="63" y="247" rx="3" ry="3" width="88" height="6" />
		<rect x="64" y="266" rx="3" ry="3" width="52" height="6" />
		<rect x="3" y="243" rx="8" ry="8" width="50" height="50" />
		<rect x="63" y="306" rx="3" ry="3" width="88" height="6" />
		<rect x="64" y="325" rx="3" ry="3" width="52" height="6" />
		<rect x="3" y="302" rx="8" ry="8" width="50" height="50" />
	</ContentLoader>
);

export default Skeleton;
