"use client";
import { useState, useEffect } from 'react';
import styles from './NotificationBanner.module.css';

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true); // Always start visible for now
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Check localStorage on component mount
  useEffect(() => {
    setIsLoaded(true);
    // Temporarily comment out localStorage check to test visibility
    // const isDismissed = localStorage.getItem('notification-banner-dismissed');
    // setIsVisible(isDismissed !== 'true'); // Show if not dismissed
  }, []);
  
  // Handle dismissing the banner
  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('notification-banner-dismissed', 'true');
  };
  
  // Don't render if not loaded or not visible
  if (!isLoaded || !isVisible) {
    return null;
  }
  
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <span className={styles.message}>
          🔗 Check out our Linktree for all club socials and updates!
        </span>
        <a 
          href="https://linktr.ee/trojan_pickleballl" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.linkButton}
        >
          Visit Linktree
        </a>
        <button 
          onClick={handleDismiss}
          className={styles.closeButton}
          aria-label="Close notification"
        >
          ✕
        </button>
      </div>
    </div>
  );
}