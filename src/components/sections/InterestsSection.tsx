import { Card, CardContent } from '@/components/ui/card';
import labImage from '@/assets/banner/banner1.jpg';
import SectionWrapper from '@/components/sections/SectionWrapper';
import decarbIcon from '/icons/decarbonization.png';
import climateIcon from '/icons/climate-resilience.png';

const interests = [
	{
		icon: decarbIcon,
		title: 'Decarbonisation',
		description:
			'We conduct comprehensive carbon intensity assessments across sectors, develop and implement data-driven net-zero strategies, and provide training for institutions to effectively transition to low-carbon operations. Our expertise also includes the design of robust monitoring tools for carbon management, as well as cutting-edge research into advanced mitigation technologies such as carbon capture and storage (CCS), enhanced rock weathering (ERW), and underground hydrogen storage (UHS).',
	},
	{
		icon: climateIcon,
		title: 'Climate Resilience',
		description:
			'Our research centres on data-driven climate risk assessments and the development of integrated adaptation strategies. We offer training and support for building institutional capacity in climate resilience and deliver monitoring services and environmental impact assessments to help organizations and communities anticipate, manage, and adapt to climate-related risks.',
	},
];

export const InterestsSection = () => {
	return (
		<section className="relative py-16 bg-gradient-to-br from-background to-muted/30 overflow-hidden">
			{/* Background decorations */}
			<div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
			<div className="pointer-events-none absolute -bottom-24 -right-24 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-3xl" />

			<SectionWrapper>
				{/* Header */}
				<div className="text-center max-w-3xl mx-auto mb-12">
					<h2 className="mt-4 text-4xl md:text-5xl font-bold text-primary tracking-tight">
						Focus Areas
					</h2>
				</div>

				{/* Content grid with image + cards */}
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Image */}
					<div className="order-2 lg:order-1">
						<div className="relative">
							<div className="rounded-3xl overflow-hidden shadow-strong ring-1 ring-border/60">
								<img
									src={labImage}
									alt="NCEL Laboratory Research"
									className="w-full h-[460px] md:h-[520px] object-cover"
								/>
							</div>
							<div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
							<div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-2xl" />
						</div>
					</div>

					{/* Cards */}
					<div className="order-1 lg:order-2">
						<div className="grid grid-cols-1 gap-6">
							{interests.map((interest) => (
								<Card
									key={interest.title}
									className="group relative overflow-hidden border-border/60 bg-card/60 supports-[backdrop-filter]:bg-card/40 backdrop-blur shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
								>
									<CardContent className="p-6">
										<div className="flex items-start gap-4">
											<div className="relative flex-shrink-0">
												<div className="relative bg-primary-dark z-10 w-16 h-16 rounded-full flex items-center justify-center p-2 border-2 border-primary">
													<img
														src={interest.icon}
														alt={`${interest.title} icon`}
														className="w-full h-full"
													/>
												</div>
											</div>
											<div className="flex-1">
												<h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
													{interest.title}
												</h3>
												<p className="text-lg md:text-xl text-foreground leading-relaxed">
													{interest.description}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</SectionWrapper>
		</section>
	);
};