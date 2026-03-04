import Link from 'next/link';
import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.cta} id="cta">
            <div className="container">
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>
                        Ready to Scale Your <span className="accent">Workflow</span>?
                    </h2>
                    <p className={styles.ctaSubtitle}>
                        Join photographers who trust us with thousands of images every season.
                        <br />
                        Simple pricing, premium quality, zero hassle.
                    </p>
                    <Link href="/dashboard" className={`btn btn-primary ${styles.ctaBtn}`}>
                        Get Started Today
                    </Link>
                </div>
            </div>
        </section>
    );
}
