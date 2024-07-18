import styles from "./index.module.css";

type Prop = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Prop) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}
