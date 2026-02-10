'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '@/components/Card';
import PageTitle from '@/components/PageTitle';
import Tag from '@/components/Tag';
import ProjectImage from '@/components/ProjectImage';
import ImageLightbox from '@/components/ImageLightbox';

const projects = [
  {
    title: 'Inventory Management Tool',
    images: ['/inventory-purchase.png', '/inventory-dashboard.png'],
    bullets: [
      'Supports 10,000+ card records and multiple stores.',
      'MongoDB transactions ensure atomic and consistent updates across collections.',
      'Bulk editing UI built with MUI DataGrid for fast data correction.',
      'Purchase, sales, and inventory sync with FIFO-based deduction logic.',
    ],
    tags: [
      { label: 'MongoDB', variant: 'blue' as const },
      { label: 'React', variant: 'blue' as const },
      { label: 'MUI', variant: 'neutral' as const },
    ],
  },
  {
    title: 'Lock It Lending Website',
    images: ['/lockitlending-website.png'],
    bullets: [
      'Production-ready business website built with React, TypeScript, and TailwindCSS.',
      'Designed all UI/UX and connected the frontend with backend services.',
      'Deployed via Render with a CI/CD workflow for stable releases.',
      'Includes a quote request form that emails client information to the company.',
    ],
    tags: [
      { label: 'React', variant: 'blue' as const },
      { label: 'TypeScript', variant: 'blue' as const },
      { label: 'TailwindCSS', variant: 'red' as const },
    ],
    link: { url: 'https://www.lockitlending.com/', label: 'Visit Website' },
  },
  {
    title: 'Sparkle GA Community Platform',
    images: ['/sparklega.png'],
    bullets: [
      'Next.js platform serving Grand Archive TCG players.',
      'Provides hero guides, card rules, decklists, and articles all in Chinese.',
      'Mobile-first design and deployed as a PWA on Vercel for fast access.',
      'Built contributor-friendly content workflow so multiple editors can update easily.',
    ],
    tags: [
      { label: 'Next.js', variant: 'blue' as const },
      { label: 'PWA', variant: 'neutral' as const },
      { label: 'Vercel', variant: 'red' as const },
    ],
    link: { url: 'https://www.sparklega.com/', label: 'Visit Platform' },
  },
  {
    title: 'ETL Pipeline Manager',
    images: ['/ETLpipeline.png'],
    bullets: [
      'ETL microservice system using Express, TypeScript, RabbitMQ, MySQL, and MongoDB.',
      'Supports ingestion from APIs, SQL/NoSQL databases, and file-based sources.',
      'Achieved 95% frontend and 80% backend test coverage using Jest & Supertest.',
      'Developed for a Halliburton-sponsored industry project.',
    ],
    tags: [
      { label: 'Express', variant: 'blue' as const },
      { label: 'TypeScript', variant: 'blue' as const },
      { label: 'RabbitMQ', variant: 'red' as const },
      { label: 'MySQL', variant: 'neutral' as const },
    ],
  },
  {
    title: '1314 Shadowbrook Street — Mystery Platformer Game',
    images: ['/game-1.png', '/game-2.png', '/game-3.png', '/game-4.png'],
    bullets: [
      'Team-developed 2.5D exploration-focused platformer built in Unity.',
      'Story-driven mystery set in a cursed mansion trapped in a time loop.',
      'Turn-based Yahtzee-style combat system with reroll and rune-combination mechanics.',
      'Player uncovers that they are the scientist who caused the curse, tying together the narrative twist.',
      'Level design mixes spooky hallways, unique rooms, NPC encounters, and enemy battles.',
      '"Cutesy-spooky" haunted mansion art direction to keep it atmospheric but approachable.',
    ],
    tags: [
      { label: 'Unity', variant: 'blue' as const },
      { label: 'C#', variant: 'neutral' as const },
      { label: 'Game Design', variant: 'red' as const },
    ],
  },
];

export default function ProjectsPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <PageTitle>Projects</PageTitle>

      {projects.map((project, index) => (
        <Card key={index} delay={0.1 * (index + 1)} variant={index === 0 ? 'featured' : 'default'}>
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-5 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--morandi-blue-200)] text-sm font-bold text-[var(--morandi-blue-600)]">
              {String(index + 1).padStart(2, '0')}
            </span>
            {project.title}
          </h2>

          {/* Images */}
          <div className={`grid gap-4 mb-6 ${
            project.images.length === 1 ? 'grid-cols-1 max-w-2xl' :
            project.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
            'grid-cols-2 md:grid-cols-4'
          }`}>
            {project.images.map((img, i) => (
              <ProjectImage
                key={i}
                src={img}
                alt={`${project.title} screenshot ${i + 1}`}
                onClick={() => setLightboxImage(img)}
              />
            ))}
          </div>

          {/* Bullets */}
          <ul className="space-y-3 text-[var(--text-secondary)] mb-5 max-w-prose">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 leading-relaxed">
                <span className="text-[var(--morandi-blue-400)] mt-1.5 shrink-0">&#8226;</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag, i) => (
              <Tag key={i} variant={tag.variant}>{tag.label}</Tag>
            ))}
          </div>

          {/* Link */}
          {project.link && (
            <motion.a
              href={project.link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--morandi-blue-50)] text-[var(--morandi-blue-700)] font-medium text-sm rounded-lg border border-[var(--morandi-blue-200)] hover:bg-[var(--morandi-blue-100)] hover:border-[var(--morandi-blue-300)] transition-colors duration-300"
            >
              {project.link.label}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          )}
        </Card>
      ))}

      <ImageLightbox
        src={lightboxImage}
        alt="Project screenshot"
        onClose={() => setLightboxImage(null)}
      />
    </>
  );
}
