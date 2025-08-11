import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

export default function Page() {
    return (
    <>
    <div className={styles.heroSection}>
        <h1 className={styles.title}>Trojan Pickleball Club</h1>
        <p className={styles.description}>Welcome to the Trojan Pickleball Club! We are a community of pickleball enthusiasts.</p>
    </div>
    <section className={styles.whoWeAreSection}>
        <div className={`${styles.whoWeAreImage} ${styles.leftImageLarge}`}>
            <Image 
                src="/images/who_are_we_1.png" 
                alt="Pickleball players" 
                width={400} 
                height={300}
                style={{ objectFit: 'contain' }}
            />
        </div>
        <div className={styles.whoWeAreContent}>
            <h2 className={styles.whoWeAreTitle}>Who we are</h2>
            <p className={styles.whoWeAreText}>Trojan Pickleball is USC&apos;s official pickleball club, full of casual beginners, recreational regulars, and tournament competitors.</p>
            <p className={styles.whoWeAreText}>We aim to spread the love and enjoyment throughout USC and the nearby community.</p>
            <p className={styles.whoWeAreText}>Whether you want to join us for our evening open plays, compete in intramurals tournaments, or travel around the country to win the national title, we have a spot for you!</p>
        </div>
        <div className={styles.whoWeAreImage}>
            <Image 
                src="/images/who_we_are_2.png" 
                alt="Pickleball action figure" 
                width={250} 
                height={300}
                style={{ objectFit: 'contain' }}
                priority={false}
                loading="lazy"
            />
        </div>
    </section>
    <section className={styles.sponsorsSection}>
        <h2 className={styles.sponsorsTitle}>Our Sponsors</h2>
        <div className={styles.sponsorsGrid}>
            <div className={styles.sponsorLogo}>
                <Image
                    src="/images/joola-logo.png"
                    alt="Joola Logo"
                    width={250}
                    height={150}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className={styles.sponsorLogo}>
                <Image
                    src="/images/skechers-logo.png"
                    alt="Skechers Logo"
                    width={250}
                    height={150}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className={styles.sponsorLogo}>
                <Image
                    src="/images/no-apologies-nutrition-logo.png"
                    alt="No Apologies Nutrition Logo"
                    width={250}
                    height={150}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className={styles.sponsorLogo}>
                <Image
                    src="/images/courts-club-logo.png"
                    alt="Courts Club Logo"
                    width={250}
                    height={150}
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <Link href="/join#sponsors" className={styles.becomeSponsorButton}>
                <div className={styles.sponsorLogo}>
                    <div className={styles.plusIcon}>+</div>
                    <span className={styles.becomeSponsorText}>Become a Sponsor</span>
                </div>
            </Link>
        </div>
    </section>
    </>
    )
}