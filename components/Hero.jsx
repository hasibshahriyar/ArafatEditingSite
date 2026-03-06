import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <Image
                src="https://images.pexels.com/photos/29252117/pexels-photo-29252117.jpeg?auto=compress&cs=tinysrgb&w=1920&fit=max"
                alt="F1 racing car on track with sparks"
                fill
                priority
                unoptimized
                className={styles.heroBgImage}
                style={{ objectFit: 'cover' }}
                sizes="100vw"
            />
            <div className={styles.heroOverlay} />
            <div className={`container ${styles.heroContent}`}>
                <div className={styles.badge}>
                    SPORTS PHOTOGRAPHY POST-PRODUCTION
                </div>
                <h1 className={styles.heroTitle}>
                    Your Post-<br />
                    Production <span className="accent">Partner</span>,<br />
                    Not Just a Service.
                </h1>
                <p className={styles.heroSubtitle}>
                    Premium extractions, composites, and retouching —<br />
                    built for volume sports photographers who demand<br />
                    speed and quality.
                </p>
                <div className={styles.heroCtas}>
                    <Link href="/pricing" className={`btn btn-primary ${styles.heroBtn}`}>
                        View Pricing <span className={styles.arrow}>→</span>
                    </Link>
                    <Link href="/dashboard" className={`btn btn-outline ${styles.heroBtn}`}>
                        Client Portal
                    </Link>
                </div>
            </div>
        </section>
    );
}
