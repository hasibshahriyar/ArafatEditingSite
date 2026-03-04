import Link from 'next/link';
import styles from './BuiltForVolume.module.css';

const features = [
    'Volume sports photography specialists',
    '24-48 hour turnaround',
    'Pay-per-image — no subscriptions',
    '2TB Dropbox cloud sync',
    'Dedicated editor communication',
    'AI-powered file organization',
];

const pipeline = [
    { step: 1, label: 'Uploaded', progress: 100, active: true },
    { step: 2, label: 'Sorting', progress: 85, active: true },
    { step: 3, label: 'Extracting', progress: 60, active: true },
    { step: 4, label: 'In-Composite', progress: 30, active: false },
    { step: 5, label: 'Ready', progress: 15, active: false },
];

export default function BuiltForVolume() {
    return (
        <section className={`section ${styles.volume}`} id="built-for-volume">
            <div className="container">
                <div className={styles.grid}>
                    {/* Left Column */}
                    <div className={styles.left}>
                        <h2 className={`section-title ${styles.title}`}>
                            Built for <span>Volume</span>
                        </h2>
                        <p className={styles.desc}>
                            We don&apos;t just edit — we organize. Our AI-powered pipeline sorts your
                            uploads into Singles, Poses, Coaches, and Groups automatically,
                            saving you hours of manual work.
                        </p>
                        <div className={styles.features}>
                            {features.map((feature, i) => (
                                <div key={i} className={styles.feature}>
                                    <div className={styles.checkIcon}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                        <Link href="/pricing" className={`btn btn-primary ${styles.cta}`}>
                            See Pricing
                        </Link>
                    </div>

                    {/* Right Column — Pipeline */}
                    <div className={styles.right}>
                        <div className={styles.pipelineCard}>
                            {pipeline.map((item) => (
                                <div key={item.step} className={`${styles.pipelineRow} ${item.active ? styles.active : ''}`}>
                                    <div className={`${styles.stepNumber} ${item.active ? styles.stepActive : ''}`}>
                                        {item.step}
                                    </div>
                                    <div className={styles.progressBar}>
                                        <div
                                            className={`${styles.progressFill} ${item.active ? styles.progressActive : ''}`}
                                            style={{ '--progress-width': `${item.progress}%` }}
                                        />
                                    </div>
                                    <span className={`${styles.stepLabel} ${item.active ? styles.labelActive : ''}`}>
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
