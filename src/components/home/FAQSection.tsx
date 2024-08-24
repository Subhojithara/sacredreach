'use client';

import { useState, useCallback } from 'react';
import styles from '@/components/style/FAQSection.module.scss';

const Process = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = useCallback(
    (index: number) => {
      setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    },
    []
  );

  return (
    <section className={styles.process}>
      <div className={styles.process__container}>
        <div className="flex pb-10 justify-center items-center space-x-5">
          <h2 className="lg:text-4xl font-medium bg-[#b9ff66] p-2">
          <a href="/contact">
            FAQ
          </a>
          </h2>
          <p className="w-60">Step-by-Step Guide to Achieving the Business Goals</p>
        </div>
        <div className={styles.process__accordions}>
          <ul className={`${styles.accordions__list} grid grid-cols-2 gap-4`}>
            {accordionData.map((item, index) => (
              <li
                key={index}
                className={`${styles.accordions__item} ${
                  activeIndex === index ? styles.open : ''
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <button
                  className={styles.accordions__control}
                  aria-expanded={activeIndex === index}
                >
                  <span className={styles.accordions__number}>{item.number}</span>
                  <span className={styles.accordions__title}>{item.title}</span>
                  <span className={styles.accordions__icon}></span>
                </button>
                <div
                  className={styles.accordions__content}
                  aria-hidden={activeIndex !== index}
                >
                  <p>{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;

const accordionData = [
  {
    number: '01',
    title: 'Who are we?',
    content:
      'We’re a team of marketers and advertisers who teamed up to grow brands, majorly the D2C and B2C brands using modern day creative-traditional advertising.',
  },
  {
    number: '02',
    title: 'What we do?',
    content:
      "We build and setup creative traditional advertising campaigns across India’s biggest festivals. Our goal is to lower down the advertising cost and connect the brands to the audience emotionally in a creative way. So that advertising doesn’t feels like one.",
  },
  {
    number: '03',
    title: 'How we’re different?',
    content:
      'We’re the only and first of a kind creative advertising agency in India that aims to help brands being remembered by their customers. We do this by building creative ads across India’s biggest festivals.',
  },
  {
    number: '04',
    title: 'Why us over your marketing team?',
    content:
      'Your current marketing team needs to look and manage into multiple channels to make sure your marketing is on point. We only help you with advertising very well by leveraging India’s biggest festivals. We’re not a competitor to your marketing team, we’re an extended partner to help them.',
  },
  {
    number: '05',
    title: 'How much does we charge?',
    content:
      'We charge a flat 5% fees of the total advertisement budget we’ll manage for you. And our promise is - we’re the most cost affordable for festival advertising.',
  },
  {
    number: '06',
    title: 'How we get started?',
    content:
      'We get started by analyzing your brand and it’s goals. Then we build a strategy on what kind of campaigns will work, their cost, how to diversify them, setting up and managing them, etc.',
  },
];
