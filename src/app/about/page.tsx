'use client';

import Image from "next/image";
import styles from './page.module.css';
import { useEffect, useRef, useState } from 'react';

const MissionCard = ({ children, index }: { children: React.ReactNode, index: number }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasBeenVisible, setHasBeenVisible] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setHasBeenVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    const slideDirection = index % 2 === 0 ? 'left' : 'right';
    const animationDelay = isVisible ? index * 0.1 : 0; // Only delay on entrance

    return (
        <div 
            ref={cardRef}
            className={`${styles.missionItem} ${isVisible ? styles.slideInVisible : styles.slideInHidden} ${styles[`slideFrom${slideDirection.charAt(0).toUpperCase() + slideDirection.slice(1)}`]} ${hasBeenVisible ? styles.hasBeenVisible : ''}`}
            style={{
                transitionDelay: `${animationDelay}s`
            }}
        >
            {children}
        </div>
    );
};

export default function Page() {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.missionSection}>
                <h1>Our Mission</h1>
                
                <MissionCard index={0}>
                    <div className={styles.missionContent}>
                        <h2>Wellness</h2>
                        <p>Pickleball keeps us moving, laughing, and connected. We believe in building healthy habits that last, whether that is breaking a sweat on the court or sharing a snack after practice. After all, maintaining mental and physical health is a lifelong journey.</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image 
                            src="/images/wellness.jpg" 
                            alt="Dink image" 
                            width={400} 
                            height={300}
                        />
                    </div>
                </MissionCard>

                <MissionCard index={1}>
                    <div className={styles.missionContent}>
                        <h2>Growth</h2>
                        <p>We&apos;re all about growth on and off the court. Pickleball is a game of skill, strategy, and continuous improvement. Over time, we aspire to move a little faster, aim with better intention, and plan with longer forethought.</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image 
                            src="/images/growth.jpg" 
                            alt="drive image" 
                            width={400} 
                            height={300}
                        />
                    </div>
                </MissionCard>

                <MissionCard index={2}>
                    <div className={styles.missionContent}>
                        <h2>Fun</h2>
                        <p>Fun is at the heart of pickleball. We play hard, but we also know how to have a good time. With plenty of open plays and casual tournaments, we create an environment where everyone can enjoy the game.</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image 
                            src="/images/fun.jpg" 
                            alt="trojan costume and players smiling" 
                            width={400} 
                            height={300}
                        />
                    </div>
                </MissionCard>

                <MissionCard index={3}>
                    <div className={styles.missionContent}>
                        <h2>Competition</h2>
                        <p>We embrace competition as a way to challenge ourselves and each other. Our competitive team travels the nation, playing with passion and determination against other universities; no matter the outcome, we always rise up and support one another.</p>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image 
                            src="/images/competition.jpg" 
                            alt="nationals poster" 
                            width={400} 
                            height={300}
                        />
                    </div>
                </MissionCard>
            </section>

            <section className={styles.teamSection}>
                <h1>Our Team</h1>
                <h2>E-Board</h2>
                
                <div className={styles.eboardGrid}>
                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/placeholder person.jpg" 
                                alt="Alex Han"
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Alex Han</div>
                        <div className={styles.memberTitle}>President</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/placeholder person.jpg" 
                                alt="Kyle Kim" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Kyle Kim</div>
                        <div className={styles.memberTitle}>Vice President</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/jonathan park.png" 
                                alt="Jonathan Park" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Jonathan Park</div>
                        <div className={styles.memberTitle}>Treasurer</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/placeholder person.jpg" 
                                alt="Chris Shin" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Chris Shin</div>
                        <div className={styles.memberTitle}>Social Chair</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/placeholder person.jpg" 
                                alt="An Duong" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>An Duong</div>
                        <div className={styles.memberTitle}>Media Chair</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/gavin huang.jpeg" 
                                alt="Gavin Huang" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Gavin Huang</div>
                        <div className={styles.memberTitle}>VP Staff</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/ty valencia.png" 
                                alt="Ty Valencia" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Ty Valencia</div>
                        <div className={styles.memberTitle}>VP Staff</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/lindsey ho.JPEG" 
                                alt="Lindsey Ho" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Lindsey Ho</div>
                        <div className={styles.memberTitle}>Treasurer Staff</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/placeholder person.jpg" 
                                alt="Anthony Yi" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Anthony Yi</div>
                        <div className={styles.memberTitle}>Social Staff</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/tyfanny vu.jpeg" 
                                alt="Tyffany Vu" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Tyffany Vu</div>
                        <div className={styles.memberTitle}>Social Staff</div>
                    </div>

                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/people/ryan tak.jpeg" 
                                alt="Ryan Tak" 
                                width={120} 
                                height={120}
                            />
                        </div>
                        <div className={styles.memberName}>Ryan Tak</div>
                        <div className={styles.memberTitle}>Media Staff</div>
                    </div>
                </div>
            </section>

            <section className={styles.competitiveSection}>
                <h2>Competitive Team</h2>
                <div className={styles.competitiveCaption}>
                    To Be Determined...
                </div>
            </section>
        </div>
    )
}
