import styles from "./page.module.css";
import Arrow from "@/components/Arrow";
import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 1000, suffix: "+", label: "Instagram followers" },
  { value: 500, suffix: "+", label: "GroupMe members" },
  { value: 7, suffix: "", label: "Sponsor partners" },
];

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <p className="label">Join</p>
        <h1 className={styles.title}>Get involved.</h1>
        <p className={styles.heroSub}>
          Join USC&apos;s fastest-growing club sport community. Whether you&apos;re a student, community member, or
          potential sponsor, there&apos;s a place for you here.
        </p>
        <dl className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <dt className="label">{s.label}</dt>
              <dd><CountUp to={s.value} suffix={s.suffix} /></dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.section} id="online">
        <div className={styles.grid}>
          <p className="label">Connect online</p>
          <div className={styles.cols}>
            <Reveal as="article" className={styles.channel}>
              <h2 className={styles.h3}>Instagram</h2>
              <p className="label">@trojanpickleball</p>
              <ul className={styles.list}>
                <li>See the highlights from practices and tournaments</li>
                <li>Stay updated on club announcements and event reminders</li>
                <li>Join giveaways to win free pickleball gear</li>
              </ul>
              <a className="link" href="https://instagram.com/trojanpickleball" target="_blank" rel="noopener noreferrer">
                Follow on Instagram <Arrow />
              </a>
            </Reveal>
            <Reveal as="article" className={styles.channel} delay={0.1}>
              <h2 className={styles.h3}>GroupMe</h2>
              <p className="label">500+ members</p>
              <ul className={styles.list}>
                <li>Real-time coordination for practices and competitions</li>
                <li>Get help with equipment, rules, or technique</li>
                <li>Find practice partners and form tournament teams</li>
              </ul>
              <a className="link" href="https://groupme.com/join_group/96038579/dmWghOg2" target="_blank" rel="noopener noreferrer">
                Join the GroupMe <Arrow />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className={styles.section} id="students">
        <div className={styles.grid}>
          <p className="label">Students</p>
          <Reveal className={styles.block}>
            <h2 className={styles.h2}>Get in the game at any level.</h2>
            <ul className={styles.list}>
              <li>Play in our open plays and tournaments</li>
              <li>Try out for the competitive team and play at the national level</li>
              <li>Introduce your friends to pickleball and help the community grow</li>
              <li>Help run the club by joining the e-board</li>
            </ul>
            <a className="link" href="https://forms.gle/GZLmCxfx4jjSBgqQ9" target="_blank" rel="noopener noreferrer">
              Apply to the e-board <Arrow />
            </a>
          </Reveal>
        </div>
      </section>

      <section className={styles.section} id="sponsors">
        <div className={styles.grid}>
          <p className="label">Sponsors</p>
          <Reveal className={styles.block}>
            <h2 className={styles.h2}>Partner with an engaged student-athlete community.</h2>
            <ul className={styles.list}>
              <li>Logo placement on team jerseys</li>
              <li>Social media shoutouts</li>
              <li>Product sampling at practices and events</li>
              <li>Access to our engaged student-athlete audience</li>
            </ul>
            <a className="link" href="mailto:trojanpickleball@gmail.com?subject=Sponsorship">
              Email trojanpickleball@gmail.com <Arrow />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
