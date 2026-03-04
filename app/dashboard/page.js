import Link from 'next/link';
import styles from './dashboard.module.css';

export const metadata = {
    title: 'Dashboard — Arafat Editing',
    description: 'Access your Arafat Editing client dashboard to manage uploads, track progress, and download deliveries.',
};

export default function DashboardPage() {
    return (
        <section className={styles.dashboard}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="7" height="7" />
                            <rect x="14" y="3" width="7" height="7" />
                            <rect x="14" y="14" width="7" height="7" />
                            <rect x="3" y="14" width="7" height="7" />
                        </svg>
                    </div>
                    <h1 className={styles.title}>Client Dashboard</h1>
                    <p className={styles.subtitle}>
                        Your dashboard is where you&apos;ll manage uploads, track order progress,
                        and download finished deliveries.
                    </p>

                    <div className={styles.statusCard}>
                        <div className={styles.statusIcon}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="12" y1="8" x2="12" y2="12" />
                                <line x1="12" y1="16" x2="12.01" y2="16" />
                            </svg>
                        </div>
                        <div>
                            <h3 className={styles.statusTitle}>Backend Not Connected</h3>
                            <p className={styles.statusDesc}>
                                The dashboard requires a backend connection to function.
                                Once the Go backend is running, you&apos;ll be able to log in,
                                upload photos, and manage your orders here.
                            </p>
                        </div>
                    </div>

                    <div className={styles.previewGrid}>
                        <div className={styles.previewCard}>
                            <h4>📤 Upload</h4>
                            <p>Drag-and-drop your raw files for processing</p>
                        </div>
                        <div className={styles.previewCard}>
                            <h4>📊 Track Progress</h4>
                            <p>Real-time status of your editing pipeline</p>
                        </div>
                        <div className={styles.previewCard}>
                            <h4>📥 Download</h4>
                            <p>Get your finished files instantly</p>
                        </div>
                        <div className={styles.previewCard}>
                            <h4>💬 Communicate</h4>
                            <p>Chat directly with your dedicated editor</p>
                        </div>
                    </div>

                    <Link href="/" className={`btn btn-primary ${styles.backBtn}`}>
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
