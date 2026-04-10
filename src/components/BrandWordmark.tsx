type BrandWordmarkProps = {
	className?: string
}

function BrandWordmark({ className = '' }: BrandWordmarkProps) {
	return (
		<span className={`font-script leading-none ${className}`}>Decorê Arts</span>
	)
}

export default BrandWordmark
