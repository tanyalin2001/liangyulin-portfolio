'use client';

import { motion } from 'framer-motion';
import Card from '@/components/Card';
import PageTitle from '@/components/PageTitle';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';

const experiences = [
  {
    title: 'Software Engineer Contractor',
    company: 'Lock It Lending',
    period: '2024',
    description: 'Developed and deployed the company\'s production website, handling UI/UX, frontend logic, and backend integration. Implemented a CI/CD pipeline to streamline testing and deployment.',
    tags: [
      { label: 'React', variant: 'blue' as const },
      { label: 'TypeScript', variant: 'blue' as const },
      { label: 'CI/CD', variant: 'neutral' as const },
    ],
    featured: false,
  },
  {
    title: 'Software Engineer Intern',
    company: 'NASA / KBR & LZ Technology',
    period: '2023',
    description: 'Supported automated testing for NASA\'s ECLSS and related systems. Took over a testing pipeline that had been stalled due to logging limitations, missing parameters, and restricted commands, then restored and expanded its functionality.',
    bullets: [
      'Identified gaps where certain flight software commands and PUI parameters could not be captured or tested, documented these limitations, and communicated what could and could not be validated moving forward.',
      'Resolved logging issues by finding a workaround tool to bypass blocked commands, enabling correct data capture for verification.',
      'Addressed simulation tool issues where some malfunctions could not be simulated, adding missing steps to ensure proper logging and validation.',
      'Implemented a two-step validation approach: sending commands, then manually setting valve/position states to ensure the simulation tool could capture the expected behavior.',
      'Upgraded the SSRT validation process from "end-only checking" to step-by-step verification (valve states, light indicators, transitions), improving accuracy and test reliability.',
    ],
    tags: [
      { label: 'NASA', variant: 'red' as const },
      { label: 'Automation', variant: 'blue' as const },
      { label: 'Testing', variant: 'neutral' as const },
    ],
    featured: true,
  },
  {
    title: 'Software Engineer Intern',
    company: 'Odyssey Space Research',
    period: '2022',
    description: 'Worked on the implementation and testing of flight software tools for Sierra Space\'s Dream Chaser spaceplane. Focused on the tools team, developing monitoring and analytics features to track performance and diagnose issues efficiently.',
    bullets: [
      'Resolved tool-related tickets and deployed new features in Pan, an internal tool used for software monitoring.',
      'Implemented unit tests in Pypan using Python unittest and mock.patch, improving code quality and ensuring correct behavior for HDF5 data rollup functions.',
      'Identified and fixed bugs in the Pan requirements page to improve user experience.',
      'Implemented dynamic PDF generation from real-time HTML content using HTML-to-Canvas + jsPDF, handling pagination and asynchronous data rendering.',
      'Improved the logging system to ensure accuracy and completeness across workflows.',
    ],
    tags: [
      { label: 'Python', variant: 'blue' as const },
      { label: 'Testing', variant: 'neutral' as const },
      { label: 'Flight Software', variant: 'red' as const },
    ],
    featured: false,
  },
];

const leadership = [
  {
    title: 'Trading Card Business',
    role: 'Co-owner',
    description: 'Co-owned a trading card resale business with 300+ verified transactions and over $10k in revenue. Managed sourcing, pricing, shipping, and customer relations while maintaining top-ranked reviews.',
    tags: [
      { label: 'E-commerce', variant: 'red' as const },
      { label: 'Business', variant: 'blue' as const },
    ],
  },
  {
    title: 'YouTube',
    role: 'Channel Owner',
    description: 'Operated an 8.3k-subscriber TCG-focused channel. Produced content, optimized SEO and thumbnails, and coordinated sponsorships and brand collaborations.',
    tags: [
      { label: 'Content Creation', variant: 'red' as const },
      { label: '8.3K Subscribers', variant: 'neutral' as const },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageTitle>Experience</PageTitle>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[15px] md:left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--morandi-blue-400)] via-[var(--morandi-blue-300)] to-[var(--morandi-blue-200)]" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="relative pl-12 md:pl-14"
          >
            {/* Timeline node */}
            <div className="absolute left-0 top-10 flex items-center justify-center">
              <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                exp.featured
                  ? 'bg-gradient-to-br from-[var(--morandi-blue-400)] to-[var(--morandi-red-400)] shadow-[0_0_12px_rgba(141,170,185,0.3)]'
                  : 'bg-white border-2 border-[var(--morandi-blue-300)]'
              }`}>
                <div className={`w-2.5 h-2.5 rounded-full ${
                  exp.featured ? 'bg-white' : 'bg-[var(--morandi-blue-400)]'
                }`} />
              </div>
            </div>

            {/* Year label */}
            <div className="mb-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-[var(--morandi-blue-500)] bg-[var(--morandi-blue-100)] rounded-full border border-[var(--morandi-blue-200)]">
                {exp.period}
              </span>
            </div>

            <Card delay={0} variant={exp.featured ? 'featured' : 'default'}>
              <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
                {exp.title}
              </h2>
              <p className="text-[var(--morandi-blue-500)] font-medium mb-4">
                {exp.company}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-5 max-w-prose">
                {exp.description}
              </p>
              {exp.bullets && (
                <ul className="space-y-3 text-[var(--text-secondary)] mb-5 max-w-prose">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed">
                      <span className="text-[var(--morandi-blue-400)] mt-1.5 shrink-0">&#8226;</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <Tag key={i} variant={tag.variant}>{tag.label}</Tag>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <SectionHeader>Leadership</SectionHeader>

      {leadership.map((item, index) => (
        <Card key={index} delay={0.1 * (index + 1)}>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-1">
            {item.title}
          </h2>
          <p className="text-[var(--morandi-blue-500)] font-medium mb-4">
            {item.role}
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-5 max-w-prose">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag, i) => (
              <Tag key={i} variant={tag.variant}>{tag.label}</Tag>
            ))}
          </div>
        </Card>
      ))}
    </>
  );
}
