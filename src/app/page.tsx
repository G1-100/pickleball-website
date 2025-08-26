import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

export default function Page() {
    const sponsors = [
  {
    name: "Joola",
    logo: "/images/joola-logo.png",
    type: "referral",
    referralText: "Support the Club",
    callToAction: "Shop Now",
    link: "https://joola.com/?bg_ref=Uvj1SnyvVj"
  },
  {
    name: "Skechers", 
    logo: "/images/skechers-logo.png",
    type: "regular",
    link: "https://skechers.com"
  },
  {
    name: "No Apologies Nutrition",
    logo: "/images/no-apologies-nutrition-logo.png", 
    type: "discount",
    discountPercent: "15%",
    discountCode: "USC15",
    link: "https://noapologiesnutrition.com/"
  },
  {
    name: "Courts Club",
    logo: "/images/courts-club-logo.png",
    type: "discount",
    discountPercent: "15%",
    discountCode: "USClub15",
    link: "https://courts-club.com/"
  }
];
    return (
    <>
    <div className={styles.heroSection}>
        <div className={styles.content}>
            <h1 className={styles.title}>Trojan Pickleball Club</h1>
            <p className={styles.description}>Battle hard. Bond harder. Belong here.</p>
        </div>
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
            {sponsors.map((sponsor) => (
                <Link key={sponsor.name} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                    <div className={styles.sponsorLogo}>
                        <div className={styles.logoContainer}>
                            <Image
                                src={sponsor.logo}
                                alt={`${sponsor.name} Logo`}
                                width={250}
                                height={150}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                        
                        {sponsor.type === 'discount' && (
                            <div className={styles.discountInfo}>
                                <span className={styles.discountPercent}>{sponsor.discountPercent} OFF</span>
                                <span className={styles.discountCode}>Code: {sponsor.discountCode}</span>
                            </div>
                        )}
                        
                        {sponsor.type === 'referral' && (
                            <div className={styles.referralInfo}>
                                <span className={styles.referralText}>{sponsor.referralText}</span>
                                <span className={styles.callToAction}>{sponsor.callToAction} →</span>
                            </div>
                        )}
                    </div>
                </Link>
            ))}
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