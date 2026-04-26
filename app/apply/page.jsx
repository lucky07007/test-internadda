import { useState } from 'react';
import Head from 'next/head';
import styles from './ApplyForm.module.css';

export default function ApplyPage() {
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ success: null, message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!form.name || !form.email || !form.role) return 'Please fill all required fields.';
    if (!emailRegex.test(form.email)) return 'Invalid email address.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus({ success: false, message: err });
      return;
    }
    setLoading(true);
    setStatus({ success: null, message: '' });
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ success: true, message: 'Application submitted successfully.' });
        setForm({ name: '', email: '', role: '', message: '' });
      } else {
        setStatus({ success: false, message: data.error || 'Submission failed.' });
      }
    } catch (e) {
      setStatus({ success: false, message: 'Network error.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Apply for Internship – InternAdda</title>
        <meta name="description" content="Apply for a global internship through InternAdda. Free, fast, and trusted." />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Apply for an Internship</h1>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name" className={styles.label}>Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="email" className={styles.label}>Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="role" className={styles.label}>Role *</label>
            <select
              id="role"
              name="role"
              className={styles.select}
              value={form.role}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select an internship</option>
              <option value="Software Engineer Intern">Software Engineer Intern</option>
              <option value="Product Designer Intern">Product Designer Intern</option>
              <option value="Marketing Intern">Marketing Intern</option>
              <option value="Data Analyst Intern">Data Analyst Intern</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="message" className={styles.label}>Message (optional)</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
              rows={4}
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </button>
        </form>
        {status.message && (
          <p className={status.success ? styles.success : styles.error}>{status.message}</p>
        )}
      </div>
    </>
  );
}
