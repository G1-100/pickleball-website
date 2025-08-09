import Image from "next/image";
import styles from './page.module.css';

export default function Page() {
    return (
        <div className={styles.aboutContainer}>
            <section className={styles.missionSection}>
                <h1>Our Mission</h1>
                
                <div className={styles.missionItem}>
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
                </div>

                <div className={styles.missionItem}>
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
                </div>

                <div className={styles.missionItem}>
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
                </div>

                <div className={styles.missionItem}>
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
                </div>
            </section>

            <section className={styles.teamSection}>
                <h1>Our Team</h1>
                <h2>E-Board</h2>
                
                <div className={styles.eboardGrid}>
                    <div className={styles.eboardMember}>
                        <div className={styles.memberImageContainer}>
                            <Image 
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
                                src="/images/placeholder person.jpg" 
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
