import styles from "./page.module.css";
import Reveal from "@/components/Reveal";

type Upcoming = { title: string; month: string; day: string; time: string; description: string };

// Edit this list as events are announced. Past events can simply be removed.
const upcoming: Upcoming[] = [
  {
    title: "Recfest",
    month: "Jan",
    day: "15",
    time: "Jan 15th, 2025, 5 PM – 7 PM",
    description:
      "Join us for Recfest! In case you missed us at Involvement Fair, this is another chance to connect with our club and get excited for pickleball.",
  },
  {
    title: "Spring Tryouts",
    month: "Jan",
    day: "17",
    time: "Jan 17th, 2025, 12 PM – 4 PM",
    description:
      "It's the big day! Come to Powerplay at 19401 Main St, Carson, CA 90248 ($15 upfront fee) to try out for our competitive team. This is your opportunity to showcase your skills, so make sure to bring your water bottle, tennis shoes, and paddles. There are $10 demo paddles if needed.",
  },
];

type Session = { day: number; start: number; end: number };
type Recurring = {
  key: "rec" | "club";
  title: string;
  location: string;
  sessions: Session[];
  schedule: { days: string; time: string }[];
  description: string;
  note?: string;
};

// day: 0 = Monday … 6 = Sunday; start/end in 24h hours
const recurring: Recurring[] = [
  {
    key: "club",
    title: "Club-hosted open play",
    location: "PE South Gym (Room 210)",
    sessions: [
      { day: 0, start: 20, end: 22 },
      { day: 2, start: 21, end: 23 },
    ],
    schedule: [
      { days: "Monday", time: "8:00 PM – 10:00 PM" },
      { days: "Wednesday", time: "9:00 PM – 11:00 PM" },
    ],
    description:
      "Our club's own open play. All skill levels are welcome, and we encourage you to join us at the PE South Gym for some late-night pickling!",
    note: "Until 1/26, open plays will be held 8–10 PM Mondays and Wednesdays at Lyon Center Court C.",
  },
  {
    key: "rec",
    title: "Open recreation",
    location: "Lyon Center Court C",
    sessions: [
      { day: 0, start: 11, end: 14 },
      { day: 1, start: 11, end: 14 },
      { day: 2, start: 11, end: 14 },
      { day: 3, start: 11, end: 14 },
      { day: 4, start: 12, end: 14 },
      { day: 5, start: 16, end: 19 },
    ],
    schedule: [
      { days: "Monday – Thursday", time: "11:00 AM – 2:00 PM" },
      { days: "Friday", time: "12:00 PM – 2:00 PM" },
      { days: "Saturday", time: "4:00 PM – 7:00 PM" },
    ],
    description:
      "USC Recreational Sports-hosted pickleball in the Lyon Center. Court C is upstairs behind the basketball courts, and this is the only on-campus weekend pickleball. Drop by for some casual games!",
  },
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const firstHour = 10;
const lastHour = 23;
const hours = Array.from({ length: lastHour - firstHour + 1 }, (_, i) => firstHour + i);

const fmt = (h: number) => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? "a" : "p"}`;

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <p className="label">Events</p>
        <h1 className={styles.title}>Where to find us.</h1>
        <p className={styles.heroSub}>Tryouts, socials, and every weekly session where you can pick up a paddle.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <p className="label">Coming up</p>
          <div>
            <ol className={styles.eventList}>
              {upcoming.map((e, i) => (
                <Reveal as="li" key={e.title} className={styles.event} delay={i * 0.08}>
                  <div className={styles.date}>
                    <span className="label">{e.month}</span>
                    <span className={styles.day}>{e.day}</span>
                  </div>
                  <div>
                    <h2 className={styles.eventTitle}>{e.title}</h2>
                    <p className="label">{e.time}</p>
                    <p className={styles.eventDesc}>{e.description}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
            <p className={`label ${styles.more}`}>More events coming soon</p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.grid}>
          <p className="label">Every week</p>
          <div className={styles.weeklyHead}>
            <h2 className={styles.h2}>Weekly schedule</h2>
            <ul className={styles.legend}>
              {recurring.map((r) => (
                <li key={r.key} className="label" data-kind={r.key}>{r.title}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.calendarOuter}>
          <Reveal className={styles.calendarWrap}>
            <div
              className={styles.calendar}
              role="img"
              aria-label="Weekly schedule: club open play Monday 8 to 10 PM and Wednesday 9 to 11 PM; open recreation Monday to Thursday 11 AM to 2 PM, Friday noon to 2 PM, Saturday 4 to 7 PM."
              style={{ "--rows": hours.length - 1 } as React.CSSProperties}
            >
              <div className={styles.corner} />
              {days.map((d, i) => (
                <div key={d} className={`label ${styles.dayHead}`} style={{ gridColumn: i + 2 }}>{d}</div>
              ))}
              {hours.slice(0, -1).map((h, i) => (
                <div key={h} className={styles.hour} style={{ gridRow: i + 2 }}>{fmt(h)}</div>
              ))}
              {days.map((d, i) => (
                <div key={`col-${d}`} className={styles.col} style={{ gridColumn: i + 2 }} />
              ))}
              {recurring.flatMap((r) =>
                r.sessions.map((s, j) => (
                  <div
                    key={`${r.key}-${s.day}`}
                    className={styles.block}
                    data-kind={r.key}
                    style={{
                      gridColumn: s.day + 2,
                      gridRow: `${s.start - firstHour + 2} / ${s.end - firstHour + 2}`,
                      "--j": j,
                    } as React.CSSProperties}
                  >
                    <span>{r.key === "club" ? "Club open play" : "Open rec"}</span>
                    <span className={styles.blockTime}>{fmt(s.start)}–{fmt(s.end)}</span>
                  </div>
                ))
              )}
            </div>
          </Reveal>
        </div>

        <div className={styles.details}>
          {recurring.map((r, i) => (
            <Reveal as="article" key={r.key} className={styles.detail} data-kind={r.key} delay={i * 0.1}>
              <h3 className={styles.detailTitle}>{r.title}</h3>
              <dl className={styles.schedule}>
                {r.schedule.map((s) => (
                  <div key={s.days}>
                    <dt>{s.days}</dt>
                    <dd>{s.time}</dd>
                  </div>
                ))}
              </dl>
              <p>{r.description}</p>
              <p className="label">{r.location}</p>
              {r.note && <p className={styles.note}>{r.note}</p>}
            </Reveal>
          ))}
        </div>

        <p className={styles.groupme}>
          Locations and times can change last minute. Check{" "}
          <a href="https://groupme.com/join_group/96038579/dmWghOg2" target="_blank" rel="noopener noreferrer">
            our GroupMe
          </a>{" "}
          before you head over.
        </p>
      </section>
    </>
  );
}
