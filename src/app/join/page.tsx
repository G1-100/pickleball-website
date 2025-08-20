import styles from './page.module.css';

export default function Page() {
    return (
    <>
    <div className={styles.page_content}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
            <h1 className={styles.heroTitle}>Get Involved with Trojan Pickleball</h1>
            <p className={styles.heroSubtitle}>
                Join USC&apos;s fastest-growing club sport community. Whether you&apos;re a student, community member, 
                or potential sponsor, we have opportunities for everyone to be part of our growing family.
            </p>
            <div className={styles.heroStats}>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>1000+</span>
                    <span className={styles.statLabel}>Instagram Followers</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>500+</span>
                    <span className={styles.statLabel}>GroupMe Members</span>
                </div>
                <div className={styles.stat}>
                    <span className={styles.statNumber}>4</span>
                    <span className={styles.statLabel}>Sponsor Partners</span>
                </div>
            </div>
        </section>

        {/* Three Feature Boxes */}
        <section className={styles.featuresSection}>
            <div className={styles.featureBox}>
                <div className={styles.featureIcon}>📱</div>
                <h3 className={styles.featureTitle}>Connect Online</h3>
                <p className={styles.featureDescription}>
                    Join our vibrant digital community and stay connected with fellow players
                </p>
                <a href="#online" className={styles.featureButton}>Follow Us</a>
            </div>
            
            <div className={styles.featureBox}>
                <div className={styles.featureIcon}>🎓</div>
                <h3 className={styles.featureTitle}>Student Opportunities</h3>
                <p className={styles.featureDescription}>
                    From beginner to competitive player, find your place in our club
                </p>
                <a href="#students" className={styles.featureButton}>Join Now</a>
            </div>
            
            <div className={styles.featureBox}>
                <div className={styles.featureIcon}>🤝</div>
                <h3 className={styles.featureTitle}>Sponsor Partnerships</h3>
                <p className={styles.featureDescription}>
                    Partner with us and reach an engaged student athlete community
                </p>
                <a href="#sponsors" className={styles.featureButton}>Partner With Us</a>
            </div>
        </section>

        {/* Detailed Content Sections */}
        <section className={styles.detailedSection}>
            <div className={styles.contentSection} id="online">
                <h2 className={styles.sectionTitle}>Connect Online</h2>
                <div className={styles.sectionContent}>
                    <div className={styles.subsection}>
                        <h3>Follow us on Instagram @trojanpickleball</h3>
                        <ul>
                            <li>See the highlights from practices and tournaments</li>
                            <li>Stay updated on club announcements and event reminders</li>
                            <li>Join giveaways get free pickleball gear</li>
                        </ul>
                    </div>
                    
                    <div className={styles.subsection}>
                        <h3>Join our GroupMe community (500+ members)</h3>
                        <ul>
                            <li>Real-time coordination for practices and competitions</li>
                            <li>Get help about equipment, rules, or techniques</li>
                            <li>Find practice partners and form tournament teams</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.contentSection} id="students">
                <h2 className={styles.sectionTitle}>Student Opportunities</h2>
                <div className={styles.sectionContent}>
                    <div className={styles.subsection}>
                        <h3>Get involved at any level</h3>
                        <ul>
                            <li>Participate in our open plays and tournaments</li>
                            <li>Tryout for the competitive team and play at the national level</li>
                            <li>Introduce your friends to pickleball and help us grow the community</li>
                            <li>Apply to join the E-Board <a href='https://bit.ly/4lVRnVo' style={{ color: 'blue' }}>here</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.contentSection} id="sponsors">
                <h2 className={styles.sectionTitle}>Sponsorship Opportunities</h2>
                <div className={styles.sectionContent}>
                    
                    <div className={styles.subsection}>
                        <h3>What sponsors get:</h3>
                        <ul>
                            <li>Logo placement on team jerseys</li>
                            <li>Social media shoutouts</li>
                            <li>Product sampling opportunities at practices and events</li>
                            <li>Access to our engaged student athlete demographic</li>
                        </ul>
                    </div>

                    <div className={styles.subsection}>
                        <h3>Sponsorship tiers:</h3>
                        <div className={styles.sponsorshipTiers}>
                            <div className={styles.tier}>
                                <h4>Title Sponsor ($2,500+)</h4>
                                <p>Generous naming rights, premium logo placement, VIP seating and speaking opportunities at tournaments, dedicated social media spotlights, marketing at student fairs, and more!</p>
                            </div>

                            <div className={styles.tier}>
                                <h4>Premium Sponsor ($1,000+)</h4>
                                <p>Logo on team jerseys and tournament banners, social media features, product sampling at events, and booth space at select tournaments</p>
                            </div>

                            <div className={styles.tier}>
                                <h4>Supporting Sponsor ($250+)</h4>
                                <p>Logo on website and social media recognition</p>
                            </div>
                            
                            <div className={styles.tier}>
                                <h4>Equipment Sponsor</h4>
                                <p>Exclusive gear/product partnerships, co-branded merchandise</p>
                            </div>
                            
                            <div className={styles.tier}>
                                <h4>Event Sponsor</h4>
                                <p>Tournament naming rights, prize sponsorship</p>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </>)
}