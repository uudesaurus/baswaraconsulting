"use client";

import Link from "next/link";
import { Building2, BarChart3, Truck, Activity, FileText, Users2, Globe2, Zap } from "lucide-react";

const serviceGroups = [
	{
		title: "Strategic Advisory & Business Design",
		description: "Transform your organization with data-driven insights and actionable strategies.",
		color: "var(--red-90)",
		services: [
			{
				icon: Building2,
				title: "Corporate Strategy & Transformation",
				excerpt: "Define long-term strategic direction and position for sustainable growth.",
			},
			{
				icon: FileText,
				title: "Model Innovation & Institutional Planning",
				excerpt: "Redesign business models aligned with market shifts and regulatory frameworks.",
			},
			{
				icon: BarChart3,
				title: "Feasibility & Investment Studies",
				excerpt: "Data-driven assessment of market potential and financial viability.",
			},
		],
	},
	{
		title: "Supply Chain, Operations & Resilience",
		description: "Optimize end-to-end operations and build resilient, responsive systems.",
		color: "var(--red-80)",
		services: [
			{
				icon: Truck,
				title: "Supply Chain Strategy & Execution",
				excerpt: "Design comprehensive supply chain solutions for visibility and efficiency.",
			},
			{
				icon: Activity,
				title: "Risk Management & Business Continuity",
				excerpt: "Build resilience through comprehensive risk assessment and mitigation.",
			},
			{
				icon: Zap,
				title: "Operational Excellence & Efficiency",
				excerpt: "Drive performance improvements through lean principles and automation.",
			},
		],
	},
];

export default function ServicesSection() {
	return (
		<section
			style={{
				backgroundColor: "var(--ui-background)",
				paddingTop: "var(--spacing-11)",
				paddingBottom: "var(--spacing-11)",
				borderTop: "1px solid var(--gray-30)",
			}}
		>
			<div
				style={{
					maxWidth: "1200px",
					margin: "0 auto",
					padding: "0 var(--spacing-07)",
				}}
			>
				{/* Section Header */}
				<div style={{ marginBottom: "var(--spacing-11)" }}>
					<h2
						style={{
							fontSize: "42px",
							lineHeight: "50px",
							fontWeight: 600,
							color: "var(--text-01)",
							marginBottom: "var(--spacing-04)",
						}}
					>
						Our Services
					</h2>
					<p
						style={{
							fontSize: "18px",
							lineHeight: "28px",
							color: "var(--text-02)",
							maxWidth: "700px",
						}}
					>
						Comprehensive consulting solutions designed to drive transformation
						across strategy, operations, and innovation.
					</p>
				</div>

				{/* Service Groups */}
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "var(--spacing-11)",
					}}
				>
					{serviceGroups.map((group, idx) => (
						<div key={idx}>
							{/* Group Header */}
							<div
								style={{
									paddingBottom: "var(--spacing-06)",
									marginBottom: "var(--spacing-09)",
									borderBottom: "2px solid var(--gray-30)",
								}}
							>
								<h3
									style={{
										fontSize: "28px",
										lineHeight: "36px",
										fontWeight: 600,
										color: "var(--text-01)",
										marginBottom: "var(--spacing-02)",
									}}
								>
									{group.title}
								</h3>
								<p
									style={{
										fontSize: "14px",
										lineHeight: "20px",
										color: "var(--text-02)",
									}}
								>
									{group.description}
								</p>
							</div>

							{/* Service Cards Grid */}
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
									gap: "var(--spacing-06)",
									marginBottom: "var(--spacing-09)",
								}}
							>
								{group.services.map((service, serviceIdx) => {
									const IconComponent = service.icon;
									return (
										<div
											key={serviceIdx}
											style={{
												border: "1px solid var(--gray-30)",
												backgroundColor: "white",
												padding: "var(--spacing-06)",
												display: "flex",
												flexDirection: "column",
												gap: "var(--spacing-04)",
												cursor: "pointer",
												transition: "all var(--transition-ui)",
											}}
											onMouseEnter={(e) => {
												e.currentTarget.style.borderColor = group.color;
												e.currentTarget.style.boxShadow = `0 4px 8px rgba(196, 30, 58, 0.1)`;
											}}
											onMouseLeave={(e) => {
												e.currentTarget.style.borderColor = "var(--gray-30)";
												e.currentTarget.style.boxShadow = "none";
											}}
										>
											{/* Icon */}
											<div
												style={{
													display: "flex",
													alignItems: "center",
													justifyContent: "center",
													width: "48px",
													height: "48px",
													backgroundColor: "var(--red-50)",
													color: group.color,
												}}
											>
												<IconComponent size={24} />
											</div>

											{/* Content */}
											<div>
												<h4
													style={{
														fontSize: "16px",
														lineHeight: "20px",
														fontWeight: 600,
														color: "var(--text-01)",
														marginBottom: "var(--spacing-02)",
													}}
												>
													{service.title}
												</h4>
												<p
													style={{
														fontSize: "14px",
														lineHeight: "20px",
														color: "var(--text-02)",
													}}
												>
													{service.excerpt}
												</p>
											</div>

											{/* Arrow indicator */}
											<div
												style={{
													marginTop: "auto",
													color: group.color,
													fontSize: "14px",
													fontWeight: 600,
													display: "flex",
													alignItems: "center",
													gap: "4px",
												}}
											>
												Learn more →
											</div>
										</div>
									);
								})}
							</div>
						</div>
					))}
				</div>

				{/* CTA */}
				<div
					style={{
						paddingTop: "var(--spacing-09)",
						borderTop: "1px solid var(--gray-30)",
						textAlign: "center",
					}}
				>
					<p
						style={{
							fontSize: "14px",
							lineHeight: "20px",
							color: "var(--text-02)",
							marginBottom: "var(--spacing-06)",
						}}
					>
						Explore all our capabilities in detail
					</p>
					<Link
						href="/capabilities"
						className="inline-flex items-center justify-center px-[var(--spacing-06)] h-12 text-[14px] font-semibold text-white bg-[var(--red-90)] hover:bg-[var(--red-80)] transition-colors"
						style={{
							textDecoration: "none",
							cursor: "pointer",
							border: "none",
						}}
					>
						View All Capabilities
					</Link>
				</div>
			</div>
		</section>
	);
}
