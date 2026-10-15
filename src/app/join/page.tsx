import styles from "./page.module.css";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 1000, suffix: "+", label: "Instagram followers" },
  { value: 500, suffix: "+", label: "GroupMe members" },
  { value: 7, suffix: "", label: "Sponsor partners" },
];

const zones = [
  { href: "#online", title: "Connect online", text: "Join our digital community and stay connected with fellow players.", action: "Follow us" },
  { href: "#students", title: "Students", text: "From beginner to competitive player, find your place in the club.", action: "Join now" },
  { href: "#sponsors", title: "Sponsors", text: "Partner with us and reach an engaged student-athlete community.", action: "Partner with us" },
];

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.inner}>
          <h1 className={styles.heroTitle}>
            <span>Get</span> <span>involved</span>
          </h1>
          <p className={styles.heroSub}>
            Join USC&apos;s fastest-growing club sport community. Whether you&apos;re a student, community member, or
            potential sponsor, there&apos;s a place for you in the Trojan Pickleball family.
          </p>
          <dl className={styles.stats}>
            {stats.map((s) => (
              <div key={s.label} className={styles.stat}>
                <dt>{s.label}</dt>
                <dd><CountUp to={s.value} suffix={s.suffix} /></dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* three zones of a court */}
      <nav className={styles.zonesWrap} aria-label="Ways to get involved">
        <div className={styles.zones}>
          {zones.map((z) => (
            <a key={z.href} href={z.href} className={styles.zone}>
              <span className={styles.zoneTitle}>{z.title}</span>
              <span className={styles.zoneText}>{z.text}</span>
              <span className={styles.zoneAction}>{z.action}</span>
            </a>
          ))}
        </div>
      </nav>

      {/* ONLINE */}
      <section className={styles.section} id="online">
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Connect online</h2>
          <div className={styles.socialGrid}>
            <Reveal as="article" className={`${styles.panel} ${styles.instagram}`}>
              <h3>Instagram</h3>
              <p className={styles.handle}>@trojanpickleball</p>
              <ul className={styles.ballList}>
                <li>See the highlights from practices and tournaments</li>
                <li>Stay updated on club announcements and event reminders</li>
                <li>Join giveaways to win free pickleball gear</li>
              </ul>
              <a className="btn btn-solid" href="https://instagram.com/trojanpickleball" target="_blank" rel="noopener noreferrer">
                Follow on Instagram
              </a>
            </Reveal>
            <Reveal as="article" className={`${styles.panel} ${styles.groupme}`} delay={0.1}>
              <h3>GroupMe</h3>
              <p className={styles.handle}>500+ members</p>
              <ul className={styles.ballList}>
                <li>Real-time coordination for practices and competitions</li>
                <li>Get help with equipment, rules, or technique</li>
                <li>Find practice partners and form tournament teams</li>
              </ul>
              <a className="btn" href="https://groupme.com/join_group/96038579/dmWghOg2" target="_blank" rel="noopener noreferrer">
                Join the GroupMe
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STUDENTS */}
      <section className={`${styles.section} ${styles.students}`} id="students">
        <div className={`${styles.inner} ${styles.studentsGrid}`}>
          <h2 className={styles.sectionTitle}>Get in the game at any level</h2>
          <Reveal className={styles.studentsBody}>
            <ul className={styles.ballList}>
              <li>Play in our open plays and tournaments</li>
              <li>Try out for the competitive team and play at the national level</li>
              <li>Introduce your friends to pickleball and help the community grow</li>
              <li>Help run the club by joining the e-board</li>
            </ul>
            <a className="btn btn-solid" href="https://forms.gle/GZLmCxfx4jjSBgqQ9" target="_blank" rel="noopener noreferrer">
              Apply to the e-board
            </a>
          </Reveal>
        </div>
      </section>

      {/* SPONSORS */}
      <section className={`${styles.section} ${styles.sponsors}`} id="sponsors">
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>Sponsor the club</h2>

          <div className={styles.getsGrid}>
            <p className={styles.getsLead}>What sponsors get</p>
            <ul className={styles.gets}>
              <li>Logo placement on team jerseys</li>
              <li>Social media shoutouts</li>
              <li>Product sampling at practices and events</li>
              <li>Access to our engaged student-athlete audience</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <p>Interested in partnering with us?</p>
            <a className="btn btn-solid" href="mailto:trojanpickleball@gmail.com?subject=Sponsorship">
              Email trojanpickleball@gmail.com
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
