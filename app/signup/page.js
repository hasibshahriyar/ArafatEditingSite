'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './signup.module.css';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <div className={styles.logoIcon}>A</div>
                    <span className={styles.logoText}>
                        Arafat <span className={styles.logoAccent}>Editing</span>
                    </span>
                </Link>

                <h1 className={styles.title}>Create Account</h1>
                <p className={styles.subtitle}>Join and access your client portal</p>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="name">Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            className={styles.input}
                            placeholder="John Smith"
                            value={form.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className={styles.input}
                            placeholder="you@example.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                className={styles.input}
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className={styles.toggle}
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label="Toggle password visibility"
                            >
                                {showPassword ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <div className={styles.field}>
                        <label className={styles.label} htmlFor="confirm">Confirm Password</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="confirm"
                                name="confirm"
                                type={showConfirm ? 'text' : 'password'}
                                autoComplete="new-password"
                                required
                                className={styles.input}
                                placeholder="••••••••"
                                value={form.confirm}
                                onChange={handleChange}
                            />
                            <button
                                type="button"
                                className={styles.toggle}
                                onClick={() => setShowConfirm(!showConfirm)}
                                aria-label="Toggle confirm password visibility"
                            >
                                {showConfirm ? '🙈' : '👁️'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                        Create Account
                    </button>
                </form>

                <p className={styles.switchText}>
                    Already have an account?{' '}
                    <Link href="/login" className={styles.switchLink}>Sign In</Link>
                </p>
            </div>
        </div>
    );
}
