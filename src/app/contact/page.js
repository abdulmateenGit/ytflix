import ContactCard from "@/app/components/ContactCard";
import ContactForm from "@/app/components/ContactForm";

import styles from "./contact.module.css"

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard/>
                <section className={styles.contact_section}>
                    <h2>We d love to hear <span>From you</span></h2>
                    <ContactForm/>
                </section>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6810.065848310302!2d74.2381485398918!3d31.413218953402417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919004a448f0433%3A0x5b37dc3245308515!2sT%20%26%20T%20Aabpara%20Housing%20Society%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1694338640217!5m2!1sen!2s"
                width={100} height={450} style={{border: 0}} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;