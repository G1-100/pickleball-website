import styles from './page.module.css';

export default function Page() {
    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Upcoming Events</h1>
                
                <div className={styles.timeline}>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.eventCard}>
                            <h3 className={styles.eventTitle}>Involvement Fair</h3>
                            <p className={styles.eventDate}>August 26th, 2025 (11 AM - 2 PM)</p>
                            <p className={styles.eventDescription}>
                                Come visit our table at Involvement Fair! Whether you&apos;re a familiar face or someone new, 
                                we&apos;d love to chat and talk about the upcoming pickleball season.
                            </p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.eventCard}>
                            <h3 className={styles.eventTitle}>Recfest</h3>
                            <p className={styles.eventDate}>August 27th, 2025 (5 PM - 7 PM)</p>
                            <p className={styles.eventDescription}>
                                Join us for Recfest! In case you missed us at Involvement Fair, this is another chance 
                                to connect with our club and get excited for pickleball.
                            </p>
                        </div>
                    </div>

                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.eventCard}>
                            <h3 className={styles.eventTitle}>Fall Tryouts</h3>
                            <p className={styles.eventDate}>August 30th, 2025</p>
                            <p className={styles.eventDescription}>
                                It&apos;s the big day! This is your opportunity to showcase your skills and join our 
                                competition team and take your game to the next level.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.futureEventsIndicator}>
                    More events coming soon...
                </div>
            </div>

            <h2>General Events</h2>
            <h3>Open Play Sessions</h3>
            <p>Mondays and Wednesdays</p>
            <p>We host weekly pickleball sessions at the PHED Gym in the evenings. We welcome you to join us as we unwind from our classes, meet new friends, and enjoy some friendly competition.</p>

            <h3></h3>

        </div>
    )
}