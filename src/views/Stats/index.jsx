import CountUp from "react-countup";
import styles from "./Stats.module.scss";
import { useInView } from "react-intersection-observer";

function Stats() {
  const usersTarget = 9934;
  const discordTarget = 23092;
  const duration = 2;

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <>
      <section id="stats" ref={ref} className={`section ${styles.stats}`}>
        <div className={`${styles["stats-container"]} container-limit`}>
          <div className={styles["stats-content"]}>
            <h2 className={styles["stats-title"]}>Estatísticas</h2>
            <div className={styles["stats-items"]}>
              <div className={styles["item-box"]}>
                <div className={styles["item-icon"]}>
                  <img src="/customers.svg" />
                </div>

                <CountUp
                  start={0}
                  end={inView ? usersTarget : 0}
                  duration={duration}
                  separator="."
                  useEasing={true}
                >
                  {({ countUpRef }) => (
                    <h2 ref={countUpRef} className={styles["item-title"]} />
                  )}
                </CountUp>

                <div className={styles["item-desc"]}>Usuarios</div>
              </div>

              <div className={styles["item-box"]}>
                <div className={styles["item-icon"]}>
                  <img src="/discord.svg" />
                </div>

                <CountUp
                  start={0}
                  end={inView ? discordTarget : 0}
                  duration={duration}
                  separator="."
                  useEasing={true}
                >
                  {({ countUpRef }) => (
                    <h2 ref={countUpRef} className={styles["item-title"]} />
                  )}
                </CountUp>

                <div className={styles["item-desc"]}>Membros no Discord</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["grid-background"]}></div>
      </section>
    </>
  );
}

export default Stats;
