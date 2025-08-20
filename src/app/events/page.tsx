import React from 'react';
import styles from './page.module.css';

export default function Page() {

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <h1 className={styles.pageTitle}>Upcoming Events</h1>
                
                <div className={styles.timeline}>
                    {/* TODO: Edit date to fit actual time*/}
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.eventCard}>
                            <h3 className={styles.eventTitle}>First Open Play</h3>
                            <p className={styles.eventDate}>August 25th, 2025 (8 PM - 10 PM)</p>
                            <p className={styles.eventDescription}>
                                We will be at the PHED Gym at Room 201 to kick off our open plays for this semester! We&apos;d  love to see you there, and have space for those who want destroy the competition or just want to relax.
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.eventCard}>
                            <h3 className={styles.eventTitle}>Involvement Fair</h3>
                            <p className={styles.eventDate}>August 26th, 2025 (11 AM - 2 PM)</p>
                            <p className={styles.eventDescription}>
                                Come visit our table at Involvement Fair! Whether you&apos;re a familiar face or someone new, 
                                we&apos;d love to chat and talk about the new pickleball season.
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
                            <p className={styles.eventDate}>August 31st, 2025 (3 PM - 6 PM)</p>
                            <p className={styles.eventDescription}>
                                It&apos;s the big day! Come to Powerplay at 19401 Main St, Carson, CA 90248 ($10 upfront fee) to tryout for our competitive team. This is your opportunity to showcase your skills, so make sure to bring your waterbottle, tennis shoes, and paddles. There are $10 demo paddles if needed.

                                Format: 3:00 - 4:30 First Round; 4:30 - 6:00 Second Round (Invite Only)
                            </p>
                        </div>
                    </div>
                    <div className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.eventCard}>
                            <h3 className={styles.eventTitle}>Fall Semester Open Tournament</h3>
                            <p className={styles.eventDate}>???</p>
                            <p className={styles.eventDescription}>
                                Get ready for our fall semester tournament. Bring your sunscreen, best paddle, and some competitive spirit, because things are about to get red-hot! More details coming soon.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.futureEventsIndicator}>
                    More events coming soon...
                </div>
            </div>

            <div className={styles.recurringEventsSection}>
                <h2 className={styles.sectionTitle}>Recurring Events</h2>
                <p className={styles.sectionSubtitle}>Join us for our regular weekly activities</p>
                
                <div className={styles.recurringEventsGrid}>
                    <div className={styles.recurringEventCard}>
                        <div className={styles.eventCardHeader}>
                            <h3 className={styles.recurringEventTitle}>Open Recreation</h3>
                            {/* <div className={`${styles.eventTypeBadge} ${styles.openRec}`}>
                                Drop-in Welcome
                            </div> */}
                        </div>
                        
                        <div className={styles.eventSchedule}>
                            <div className={styles.scheduleItem}>
                                <span className={styles.dayLabel}>Monday - Friday</span>
                                <span className={styles.timeLabel}>11:00 AM - 2:00 PM</span>
                            </div>
                            <div className={styles.scheduleItem}>
                                <span className={styles.dayLabel}>Saturday</span>
                                <span className={styles.timeLabel}>4:00 PM - 7:00 PM</span>
                            </div>
                        </div>
                        
                        <p className={styles.eventDescription}>
                            Join us for casual pickleball! All skills levels are welcome, and we will set up the nets and courts. No tryouts required.
                        </p>
                        
                        <div className={styles.eventLocation}>
                            <span className={styles.locationIcon}>📍</span>
                            <span>Lyon Center Court C</span>
                        </div>
                    </div>

                    <div className={styles.recurringEventCard}>
                        <div className={styles.eventCardHeader}>
                            <h3 className={styles.recurringEventTitle}>Intramural League</h3>
                            {/* <div className={`${styles.eventTypeBadge} ${styles.intramural}`}>
                                Competitive
                            </div> */}
                        </div>
                        
                        <div className={styles.eventSchedule}>
                            <div className={styles.scheduleItem}>
                                <span className={styles.dayLabel}>Monday - Wednesday</span>
                                <span className={styles.timeLabel}>5:00 PM - 11:00 PM</span>
                            </div>
                            
                        </div>
                        
                        <p className={styles.eventDescription}>
                            Competitive tournament organized by Recreational Sports. New players are encouraged to join, so pair up with your friends; registration instructions can be found at https://recsports.usc.edu/programs-and-classes/competitive-sports/intramural-sports/.
                        </p>
                        
                        <div className={styles.eventLocation}>
                            <span className={styles.locationIcon}>📍</span>
                            <span>Lyon Center Court C</span>
                        </div>
                        
                        <div className={styles.eventNote}>
                            <span className={styles.noteIcon}>🗓</span>
                            <span>Lasts 9/8 - 10/13 </span>
                        </div>
                    </div>

                    {/* <div className={styles.recurringEventCard}>
                        <div className={styles.eventCardHeader}>
                            <h3 className={styles.recurringEventTitle}>Club Practice</h3>
                        </div>
                        
                        <div className={styles.eventSchedule}>
                            <div className={styles.scheduleItem}>
                                <span className={styles.dayLabel}>Monday</span>
                                <span className={styles.timeLabel}>8:00 PM - 10:00 PM</span>
                            </div>
                            <div className={styles.scheduleItem}>
                                <span className={styles.dayLabel}>Wednesday</span>
                                <span className={styles.timeLabel}>9:00 PM - 11:00 PM</span>
                            </div>
                        </div>
                        
                        <p className={styles.eventDescription}>
                            Structured training sessions for our competitive team members. Focus on advanced techniques, 
                            strategy, and tournament preparation. Tryouts required to join.
                        </p>
                        
                        <div className={styles.eventLocation}>
                            <span className={styles.locationIcon}>📍</span>
                            <span>PE South Gym (Room 201)</span>
                        </div>
                        
                        <div className={styles.eventNote}>
                            <span className={styles.noteIcon}>🏆</span>
                            <span>Tryouts required - see upcoming events above</span>
                        </div>
                    </div> */}
                </div>
                
                <div className={styles.generalNote}>
                    <span className={styles.noteIcon}>📍</span>
                    <span><strong>Location Updates:</strong> Check <a style={{ color: 'blue' }} href="https://groupme.com/join_group/96038579/dmWghOg2" target="_blank" rel="noopener noreferrer">GroupMe</a> for any last-minute changes to locations or times</span>
                </div>
            </div>

        </div>
    );
}