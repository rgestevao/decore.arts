import BrandWordmark from './BrandWordmark'

type SiteFooterProps = {
	logo: string
	whatsappLink: string
}

function SiteFooter({ logo, whatsappLink }: SiteFooterProps) {
	return (
		<footer
			id="contato"
			className="bg-[#FFCAD4] px-5 py-12 text-[#785E61] sm:px-8 lg:px-10"
		>
			<div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
				<div>
					<div className="flex items-center gap-4">
						<img
							src={logo}
							alt="Logo Decorê Arts"
							className="h-16 w-16 rounded-full bg-[#FAFAFA]/75 p-1 object-contain"
						/>
						<div>
							<BrandWordmark className="text-[2.6rem] sm:text-5xl" />
							<p className="max-w-2xl text-xs uppercase tracking-[0.24em] text-[#785E61]/72 sm:text-sm">
								Artes personalizadas em madeira feitas com carinho.
							</p>
						</div>
					</div>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
					<a
						href="https://www.instagram.com/decoreart.s/"
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer rounded-[1.6rem] border border-[#785E61]/10 bg-[#FAFAFA]/55 px-5 py-5 transition hover:bg-[#FAFAFA]/80"
					>
						<p className="text-xs uppercase tracking-[0.28em] text-[#785E61]/60">
							Instagram
						</p>
						<p className="mt-2 text-sm font-semibold">@decoreart.s</p>
					</a>
					<a
						href={whatsappLink}
						target="_blank"
						rel="noreferrer"
						className="cursor-pointer rounded-[1.6rem] border border-[#785E61]/10 bg-[#FAFAFA]/55 px-5 py-5 transition hover:bg-[#FAFAFA]/80"
					>
						<p className="text-xs uppercase tracking-[0.28em] text-[#785E61]/60">
							WhatsApp
						</p>
						<p className="mt-2 text-sm font-semibold">(35) 99983-8671</p>
					</a>
				</div>
			</div>

			<div className="mx-auto mt-10 max-w-7xl border-t border-[#785E61]/12 pt-6 text-center">
				<a
					href="https://www.instagram.com/rodrigoge_/"
					target="_blank"
					rel="noreferrer"
					className="cursor-pointer text-sm font-medium text-[#785E61] transition hover:text-[#785E61]/70"
				>
					Feito por Rodrigo Gouveia - @rodrigoge
				</a>
			</div>
		</footer>
	)
}

export default SiteFooter
