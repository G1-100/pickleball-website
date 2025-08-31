import Image from "next/image";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.footerTop}>
                    <div className={styles.footerLogo}>
                        <div className={styles.logoCircle}>
                            <Image 
                                src="/images/club_logo.jpg" 
                                alt="Trojan Pickleball Club Logo"
                                width={110} 
                                height={110}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                    <p className={styles.copyright}>© 2025 Trojan Pickleball Club. All rights reserved.</p>
                </div>
                <div className={styles.socialLinks}>
                    <p>Contact Us:</p>
                    <a 
                        href="https://instagram.com/trojanpickleball" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Follow us on Instagram"
                    >
                        <Image 
                            src="/images/instagram-logo.svg" 
                            alt="Instagram" 
                            width={32} 
                            height={32}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>
                    <a 
                        href="mailto:trojanpickleball@gmail.com" 
                        aria-label="Send us an email"
                    >
                        <Image 
                            src="/images/gmail-icon.png" 
                            alt="Email" 
                            width={32} 
                            height={32}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>
                    <a 
                        href="https://groupme.com/join_group/96038579/dmWghOg2" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Join our GroupMe"
                    >
                        <Image 
                            src="/images/groupme-icon.png" 
                            alt="GroupMe" 
                            width={32} 
                            height={32}
                            style={{ objectFit: 'contain' }}
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
}
