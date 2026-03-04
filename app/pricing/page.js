import Link from 'next/link';
import styles from './pricing.module.css';

export const metadata = {
    title: 'Pricing — Arafat Editing',
    description: 'Simple, transparent pricing for sports photography post-production. Pay per image with no subscriptions.',
};

const plans = [
    {
        name: 'Starter',
        price: '$1.50',
        unit: 'per image',
        description: 'Perfect for small teams or single events.',
        features: [
            'Basic extractions',
            'Standard backgrounds',
            '48-hour turnaround',
            'Email support',
            'Up to 500 images/month',
        ],
        popular: false,
    },
    {
        name: 'Pro',
        price: '$4.00',
        unit: 'per image',
        description: 'For volume photographers who need speed & quality.',
        features: [
            'Premium extractions & composites',
            'Custom backgrounds',
            '24-hour turnaround',
            'Dedicated editor',
            '2TB Dropbox sync',
            'AI-powered organization',
            'Unlimited images',
        ],
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        unit: 'contact us',
        description: 'For large studios and franchises with custom needs.',
        features: [
            'Everything in Pro',
            'Custom pipelines',
            'Priority turnaround',
            'Account manager',
            'API access',
            'White-label options',
            'Volume discounts',
        ],
        popular: false,
    },
];

export default function PricingPage() {
    return (
        <section className={styles.pricing}>
            <div className="container">
                <div className={styles.header}>
                    <h1 className="section-title">
                        Simple, Transparent <span>Pricing</span>
                    </h1>
                    <p className="section-subtitle">
                        No subscriptions. No hidden fees. Pay only for what you need.
                    </p>
                </div>

                <div className={styles.plansGrid}>
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`${styles.planCard} ${plan.popular ? styles.popular : ''}`}
                        >
                            {plan.popular && <div className={styles.popularBadge}>Most Popular</div>}
                            <h3 className={styles.planName}>{plan.name}</h3>
                            <div className={styles.priceRow}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.unit}>{plan.unit}</span>
                            </div>
                            <p className={styles.planDesc}>{plan.description}</p>
                            <ul className={styles.featuresList}>
                                {plan.features.map((feature, j) => (
                                    <li key={j} className={styles.featureItem}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/dashboard"
                                className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline-dark'} ${styles.planBtn}`}
                            >
                                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
