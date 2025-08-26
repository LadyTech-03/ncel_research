import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import SectionWrapper from '@/components/sections/SectionWrapper';

// Import images and icons
import decarbImage from '@/assets/banner/decarbonization.webp';
import climateImage from '@/assets/banner/climate resilience.webp';

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
	const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [slideCount, setSlideCount] = useState<number>(0);
	const directionRef = useRef<boolean>(true);

	useEffect(() => {
		if (!carouselApi) return;

		setSlideCount(carouselApi.slideNodes().length);
		setSelectedIndex(carouselApi.selectedScrollSnap());

		const onSelect = () => setSelectedIndex(carouselApi.selectedScrollSnap());
		carouselApi.on('select', onSelect);

		const interval = setInterval(() => {
			if (!carouselApi) return;
			if (directionRef.current) {
				if (!carouselApi.canScrollNext()) {
					directionRef.current = false;
					carouselApi.scrollPrev();
				} else {
					carouselApi.scrollNext();
				}
			} else {
				if (!carouselApi.canScrollPrev()) {
					directionRef.current = true;
					carouselApi.scrollNext();
				} else {
					carouselApi.scrollPrev();
				}
			}
		}, 4000);

		return () => {
			carouselApi.off('select', onSelect);
			clearInterval(interval);
		};
	}, [carouselApi]);

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

				{/* Content grid with carousel + cards */}
				<div className="grid lg:grid-cols-2 gap-12 items-start">
					{/* Carousel */}
					<div className="order-2 lg:order-1">
						<div className="relative">
							<div className="rounded-lg overflow-hidden shadow-strong">
								<Carousel setApi={setCarouselApi} className="w-full">
									<CarouselContent>
										<CarouselItem>
											<img
												src={decarbImage}
												alt="Decarbonisation"
												className="w-full h-auto object-fit"
											/>
										</CarouselItem>
										<CarouselItem>
											<img
												src={climateImage}
												alt="Climate Resilience"
												className="w-full h-auto object-fit"
											/>
										</CarouselItem>
									</CarouselContent>
								</Carousel>
							</div>
							{/* Dot navigation */}
							{slideCount > 1 && (
								<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 bg-background/60 backdrop-blur rounded-full px-3 py-1">
									{Array.from({ length: slideCount }).map((_, idx) => (
										<button
											key={idx}
											onClick={() => carouselApi?.scrollTo(idx)}
											className={`h-2.5 rounded-full transition-colors ${selectedIndex === idx ? 'bg-primary w-6' : 'bg-muted-foreground/40 w-2.5'}`}
											aria-label={`Go to slide ${idx + 1}`}
										/>
									))}
								</div>
							)}
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
												<div className="relative bg-primary-dark z-10 w-10 h-10 md:w-16 md:h-16 rounded-full flex items-center justify-center p-2 border-2 border-primary">
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
												<p className="text-lg md:text-2xl text-foreground leading-relaxed">
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