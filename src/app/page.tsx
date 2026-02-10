'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import Tag from '@/components/Tag';
import basePath from '@/lib/basePath';

const skills = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'MUI'],
  Backend: ['Node.js', 'Express', 'MongoDB', 'MySQL', 'RabbitMQ'],
  Tools: ['Git', 'Docker', 'Vercel', 'Jest', 'CI/CD'],
  Interests: ['Trading Card Games', 'Game Design', 'Content Creation', 'Unity'],
};

const quickLinks = [
  { href: '/projects', label: 'View Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact Me' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Card delay={0.1} hover={false} variant="featured" className="mb-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="shrink-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--morandi-blue-300)] to-[var(--morandi-red-300)] rounded-full blur-lg opacity-30 scale-110" />
              <Image
                src={`${basePath}/profile.jpg`}
                alt="Liang Yu Lin"
                width={180}
                height={180}
                className="relative rounded-full object-cover border-4 border-[var(--morandi-blue-200)] shadow-xl shadow-[rgba(141,170,185,0.2)]"
                priority
              />
            </div>
          </motion.div>

          {/* Name + Intro */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-3">
              Liang Yu Lin
            </h1>
            <p className="text-base md:text-lg text-[var(--morandi-blue-500)] font-medium mb-4">
              Software Engineer &middot; Full-Stack Developer &middot; TCG Enthusiast
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed max-w-lg mb-6">
              I build full-stack applications and tools around the things I love — from inventory systems for trading card businesses to community platforms for players and collectors.
            </p>

            {/* Quick-link buttons */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {quickLinks.map((link) => (
                <motion.div key={link.href} whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--morandi-blue-50)] text-[var(--morandi-blue-700)] font-medium text-sm rounded-lg border border-[var(--morandi-blue-200)] hover:bg-[var(--morandi-blue-100)] hover:border-[var(--morandi-blue-300)] transition-colors duration-300 shadow-sm shadow-[rgba(141,170,185,0.1)]"
                  >
                    {link.label}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Who I Am */}
      <SectionHeader>Who I Am</SectionHeader>

      <Card delay={0.2}>
        <p className="text-[var(--text-secondary)] leading-relaxed mb-4 max-w-prose">
          I&apos;m a software engineer who enjoys trading card games, especially Grand Archive.
          I originally explored game development in university because I loved interactive experiences,
          and after graduating, I started creating tools and systems around the TCG hobby—inventory apps,
          community platforms, and different side projects that blend my technical skills with the things I enjoy.
        </p>
        <p className="text-[var(--text-secondary)] leading-relaxed max-w-prose">
          Whether it&apos;s building full-stack applications or designing features that support players and collectors,
          I like turning ideas from the card-game world into real, working software.
        </p>
      </Card>

      {/* Education */}
      <SectionHeader>Education</SectionHeader>

      <Card delay={0.3}>
        <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-3">
          University of Houston
        </h2>
        <p className="text-[var(--text-secondary)] mb-4">
          <span className="font-medium text-[var(--text-primary)]">B.S. in Computer Science</span> — GPA 3.81/4.0
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag variant="blue">CodeRed Hackathon 1st Place</Tag>
          <Tag variant="red">Best Accessibility Hack</Tag>
        </div>
      </Card>

      {/* Skills & Interests */}
      <SectionHeader>Skills &amp; Interests</SectionHeader>

      <Card delay={0.4} variant="subtle">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-[var(--morandi-blue-600)] uppercase tracking-wider mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <Tag
                    key={skill}
                    variant={
                      category === 'Interests' ? 'red' :
                      category === 'Tools' ? 'neutral' :
                      'blue'
                    }
                  >
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
}
