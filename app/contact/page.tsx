import styles from "./page.module.css";
import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        ご質問はこちら
        <br />
        内容は
      </p>
      <ContactForm />
    </div>
  );
}
