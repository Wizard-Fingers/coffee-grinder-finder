import Image from "next/image";
import Link from "next/link";
// classnames package
import cls from "classnames";

import styles from "./card.module.css";
// installed classnames package to handle conditional classes from npm
// npm install classnames or yarn add classnames
// rather use NPM in this case because it's a Next.js project as I found out and yarn automatically save the package to your `dependencies` in `package.json`
const Card = (props) => {
  return (
     <Link href={props.href} id="link" className={styles.cardLink}>
        {/* I added the two classes like so below */}
      <div className={cls("glass", styles.container)}>
        <div className={styles.cardHeaderWrapper}>
          <h2 className={styles.cardHeader}>{props.name}</h2>
        </div>
        <div className={styles.cardImageWrapper}>
          <Image
            className={styles.cardImage}
            src={props.imgUrl}
            width={300}
            height={300}
          />
        </div>
      </div>
    </Link>
  );
};

export default Card;
