import Image from "next/image";
import styles from "./styles.module.css";
import { BsArrowRight } from "react-icons/bs";
import { Zoom } from "react-reveal";

export default function BlogSection() {
  const blogs = [
    {
      img: "/blog_image_1.svg",
      title: "Quick-start guide to nuts and seeds",
      authorImg: "/author1.svg",
      authorName: "Kevin Ibrahim",
    },
    {
      img: "/bloco_image_2.svg",
      title: "Nutrition: Tips for Improving Your Health",
      authorImg: "/author2.svg",
      authorName: "Mike Jackson",
    },
    {
      img: "/bloco_image_3.svg",
      title: "The top 10 benefits of eating healthy",
      authorImg: "/author3.svg",
      authorName: "Bryan McGregor",
    },
    {
      img: "/bloco_image_4.svg",
      title: "What Makes a Healthy Diet?",
      authorImg: "/author4.svg",
      authorName: "Jashua",
    },
  ];

  return (
    <section className={styles.BlogSectionContainer}>
      <h2>Read Our Blog</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className={styles.BlogCardsContainer}>
        {blogs.map((item, index) => {
          return (
            <Zoom cascade right key={index}>
              <div className={styles.blogCard}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={280}
                  height={200}
                  objectFit="cover"
                />

                <h2>{item.title}</h2>
                <div className={styles.cardAuthor}>
                  <Image
                    src={item.authorImg}
                    alt={item.authorName}
                    width={52}
                    height={52}
                    objectFit="cover"
                  />
                  <span>{item.authorName}</span>
                </div>
              </div>
            </Zoom>
          );
        })}
        <button className={styles.ButtonMoveSlide}>
          <BsArrowRight />
        </button>
      </div>
    </section>
  );
}
