import React from 'react';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <img 
            src="/img/front_page.png" // Change this to your actual image path
            alt="My Profile"
            className={styles.profileImage} // Apply CSS styling
          />
        </div>
      </div>
    </section>
  );
}