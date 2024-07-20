import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページがみつかれへん</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページはねー
          <br />
          URLを互角にくだあ
        </dd>
      </dl>
    </div>
  );
}
