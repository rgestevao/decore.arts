import { type ReactNode } from 'react'
import BrandWordmark from './BrandWordmark'

type NavItem = {
	label: string
	href?: string
	action?: () => void
}

type SiteHeaderProps = {
	logo: string
	navItems: NavItem[]
	whatsappLink: string
	mobileMenuOpen: boolean
	setMobileMenuOpen: (value: boolean | ((value: boolean) => boolean)) => void
	navigateToHome: () => void
}

function SiteHeader({
	logo,
	navItems,
	whatsappLink,
	mobileMenuOpen,
	setMobileMenuOpen,
	navigateToHome,
}: SiteHeaderProps) {
	const renderNavItem = (item: NavItem, mobile = false): ReactNode => {
		const baseClasses = mobile
			? 'cursor-pointer rounded-2xl px-4 py-3 text-left text-sm font-semibold tracking-[0.16em] transition hover:bg-[#FFCAD4]/55'
			: 'cursor-pointer text-sm font-semibold tracking-[0.18em] text-[#785E61] transition hover:text-[#785E61]/70'

		if (item.href) {
			return (
				<a
					key={item.label}
					href={item.href}
					onClick={() => setMobileMenuOpen(false)}
					className={baseClasses}
				>
					{item.label}
				</a>
			)
		}

		return (
			<button
				key={item.label}
				type="button"
				onClick={item.action}
				className={baseClasses}
			>
				{item.label}
			</button>
		)
	}

	return (
		<header className="fixed inset-x-0 top-0 z-50 border-b border-[#785E61]/10 bg-[#FAFAFA]/90 backdrop-blur-xl">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
				<button
					type="button"
					onClick={navigateToHome}
					className="flex cursor-pointer items-center gap-3 text-left"
					aria-label="Ir para a página inicial da Decorê Arts"
				>
					<img
						src={logo}
						alt="Logo Decorê Arts"
						className="h-14 w-14 rounded-full object-contain shadow-[0_12px_24px_rgba(120,94,97,0.12)]"
					/>
					<div>
						<BrandWordmark className="text-3xl tracking-[0.01em] sm:text-[2.35rem]" />
						<p className="mt-1 text-xs uppercase tracking-[0.32em] text-[#785E61]/65">
							Artes em madeira
						</p>
					</div>
				</button>

				<nav className="hidden items-center gap-8 md:flex">
					{navItems.map((item) => renderNavItem(item))}
					<a
						href={whatsappLink}
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer rounded-full bg-[#FFCAD4] px-6 py-3 text-sm font-bold tracking-[0.1em] text-[#785E61] transition hover:-translate-y-0.5 hover:bg-[#f7bdc9] hover:shadow-[0_16px_30px_rgba(120,94,97,0.14)]"
					>
						Peça sua arte
					</a>
				</nav>

				<button
					type="button"
					className="inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#785E61]/15 bg-[#FFCAD4]/60 text-[#785E61] transition hover:bg-[#FFCAD4] md:hidden"
					aria-label="Abrir menu"
					aria-expanded={mobileMenuOpen}
					onClick={() => setMobileMenuOpen((value) => !value)}
				>
					<span className="space-y-1.5">
						<span className="block h-0.5 w-5 rounded-full bg-current" />
						<span className="block h-0.5 w-5 rounded-full bg-current" />
						<span className="block h-0.5 w-5 rounded-full bg-current" />
					</span>
				</button>
			</div>

			{mobileMenuOpen ? (
				<div className="border-t border-[#785E61]/10 bg-[#FAFAFA] px-5 py-5 md:hidden">
					<nav className="flex flex-col gap-4">
						{navItems.map((item) => renderNavItem(item, true))}
						<a
							href={whatsappLink}
							target="_blank"
							rel="noreferrer"
							className="mt-2 cursor-pointer rounded-full bg-[#FFCAD4] px-6 py-3 text-center text-sm font-bold tracking-[0.1em] text-[#785E61] transition hover:bg-[#f7bdc9]"
						>
							Peça sua arte
						</a>
					</nav>
				</div>
			) : null}
		</header>
	)
}

export type { NavItem }

export default SiteHeader
