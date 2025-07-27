import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import { Link } from '../../components/Link/link';
import styles from './style.module.css';


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <div className={styles.pageTitle}>About Tennis Pro Store</div>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Story</h2>
          <div className={styles.content}>
            <p>
              Founded in 2010, Tennis Pro Shop has grown to become the premier destination for tennis 
              enthusiasts seeking top-quality rackets and equipment. Our passion for the sport drives 
              us to carefully curate the best products from leading brands worldwide.
            </p>
            <p>
              Our team of former professional players and certified racket technicians ensures that 
              every product we offer meets the highest standards of performance and quality.
            </p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <div className={styles.content}>
            <p>
              We are determined to helping players at all levels find their perfect racket. Whether 
              you are a beginner looking for your first racket or a professional seeking tournament-grade 
              equipment, our experts are here to guide you.
            </p>
            <p className={styles.highlight}>
              We believe the right racket can transform your game, and we are committed to matching 
              every player with their ideal equipment.
            </p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose Us</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🎾</span>
              <h3 className={styles.featureTitle}>Premium Selection</h3>
              <p className={styles.featureDescription}>
                Curated collection of top-rated rackets from leading brands worldwide
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🔧</span>
              <h3 className={styles.featureTitle}>Expert Stringing</h3>
              <p className={styles.featureDescription}>
                Professional racket stringing service with quick turnaround
              </p>
            </div>
            
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🚚</span>
              <h3 className={styles.featureTitle}>Fast Shipping</h3>
              <p className={styles.featureDescription}>
                Worldwide delivery with reliable and tracked shipping options
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Payment Methods</h2>
          <div className={styles.content}>
            <p>
              We offer a variety of secure payment options for your convenience:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>Credit/Debit Cards (Visa, Mastercard, American Express)</li>
              <li className={styles.listItem}>PayPal</li>
              <li className={styles.listItem}>Apple Pay</li>
              <li className={styles.listItem}>Google Pay</li>
              <li className={styles.listItem}>Bank Transfers</li>
            </ul>
            <p>
              All transactions are encrypted and securely processed. We never store your full payment 
              information on our servers.
            </p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Shipping Information</h2>
          
          <h3 className={styles.sectionSubtitle}>Domestic Shipping</h3>
          <div className={styles.policyGrid}>
            <div className={styles.policyCard}>
              <h4 className={styles.policyTitle}>Standard Shipping</h4>
              <p>3-5 business days ($5.99)</p>
            </div>
            <div className={styles.policyCard}>
              <h4 className={styles.policyTitle}>Expedited Shipping</h4>
              <p>2 business days ($12.99)</p>
            </div>
            <div className={styles.policyCard}>
              <h4 className={styles.policyTitle}>Overnight Shipping</h4>
              <p>Next business day ($24.99)</p>
            </div>
          </div>
          
          <h3 className={styles.sectionSubtitle}>International Shipping</h3>
          <div className={styles.policyGrid}>
            <div className={styles.policyCard}>
              <h4 className={styles.policyTitle}>Standard International</h4>
              <p>7-14 business days ($14.99)</p>
            </div>
            <div className={styles.policyCard}>
              <h4 className={styles.policyTitle}>Priority International</h4>
              <p>5-7 business days ($29.99)</p>
            </div>
          </div>
          
          <div className={styles.content}>
            <p>
              All international orders may be subject to customs fees and import duties, which are 
              the responsibility of the customer.
            </p>
            <p>
              <strong>Note:</strong> We currently ship to over 50 countries worldwide. During checkout, 
              you will see available shipping options for your location.
            </p>
          </div>
        </section>
        
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Returns Policy</h2>
          <div className={styles.content}>
            <p>
              We offer a 30-day satisfaction guarantee on all rackets. If you are not completely satisfied 
              with your purchase, you may return it for a full refund or exchange.
            </p>
            <p>
              To be eligible for a return, rackets must be in original condition with all tags attached 
              and packaging intact. Custom-strung rackets are final sale unless defective.
            </p>
          </div>
        </section>
        
        <div className={styles.ctaContainer}>
          <Link href={'/rackets'} className={styles.ctaButton}>
            Browse Racket Collection
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
