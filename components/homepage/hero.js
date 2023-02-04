/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/homepage/web-dev.jpeg"
          alt="Web Development Illustration"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello there! </h1>
      <p>This is a blog about web development </p>
    </section>
  );
}

export default Hero;
