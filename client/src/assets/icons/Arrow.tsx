const Arrow = ({ isOpen }: { isOpen: boolean }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={28}
			height={28}
			viewBox="0 0 24 24"
			className="transition duration-150 ease-in-out"
			style={{
				transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
			}}
		>
			<path
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={2}
				d="m17 14l-5-5m0 0l-5 5"
			></path>
		</svg>
	);
};

export default Arrow;
