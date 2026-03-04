import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    {/* Brand */}
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <div className={styles.logoIcon}>A</div>
                            <span className={styles.logoText}>
                                Arafat <span className={styles.logoAccent}>Editing</span>
                            </span>
                        </div>
                        <p className={styles.brandDesc}>
                            Your post-production partner. Premium sports composites,
                            extractions, and retouching — built for volume photographers.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Quick Links</h4>
                        <ul className={styles.linksList}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/pricing">Pricing</Link></li>
                            <li><Link href="/dashboard">Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>Contact</h4>
                        <ul className={styles.contactList}>
                            <li>
                                <a href="mailto:arafatfahim94@gmail.com">arafatfahim94@gmail.com</a>
                            </li>
                            <li>Mon-Fri, 9am-6pm EST</li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p>© 2026 Arafat Editing. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
