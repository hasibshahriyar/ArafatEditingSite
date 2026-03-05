'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './login.module.css';

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [form, setForm] = useState({ email: '', password: '' });

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

                <h1 className={styles.title}>Welcome Back</h1>
                <p className={styles.subtitle}>Sign in to access your client portal</p>

                <form className={styles.form} onSubmit={handleSubmit}>
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
                        <div className={styles.labelRow}>
                            <label className={styles.label} htmlFor="password">Password</label>
                            <button type="button" className={styles.forgot}>Forgot password?</button>
                        </div>
                        <div className={styles.inputWrapper}>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="current-password"
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

                    <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                        Sign In
                    </button>
                </form>

                <p className={styles.switchText}>
                    Don&apos;t have an account?{' '}
                    <Link href="/signup" className={styles.switchLink}>Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
