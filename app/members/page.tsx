import Image from "next/image";
import styles from "./page.module.css";
const data = {
  contents: [
    {
      id: "1",
      image: {
        url: "/img-member1.jpg",
        width: 240,
        height: 240,
      },
      name: "デイビッド",
      position: "ceo",
      profile: "あああああああああああああああ",
    },
    {
      id: "2",
      image: {
        url: "/img-member2.jpg",
        width: 240,
        height: 240,
      },
      name: "あああ",
      position: "ceo",
      profile: "あああああああああああああああ",
    },
    {
      id: "3",
      image: {
        url: "/img-member3.jpg",
        width: 240,
        height: 240,
      },
      name: "いいい",
      position: "ceo",
      profile: "あああああああああああああああ",
    },
  ],
};

export default function Page() {
  return (
    <div className={styles.container}>
      {data.contents.length === 0 ? (
        <p className={styles.empty}>メンバーがとろうされてませ</p>
      ) : (
        <ul>
          {data.contents.map((menber) => (
            <li key={menber.id} className={styles.list}>
              <Image
                src={menber.image.url}
                alt=""
                width={menber.image.width}
                height={menber.image.height}
                className={styles.image}
              />
              <dl>
                <dt className={styles.name}>{menber.name}</dt>
                <dd className={styles.position}>{menber.position}</dd>
                <dd className={styles.plofile}>{menber.plofile}</dd>
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
