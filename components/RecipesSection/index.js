import Image from "next/image";
import styles from "./styles.module.css";

export default function RecipesSection() {
  const recipes = [
    {
      name: "Broccoli Salad with Bacon",
      img: "/comida_1.svg",
    },
    {
      name: "Classic Beef Burgers",
      img: "/comida_2.svg",
    },
    {
      name: "Classic Potato Salad",
      img: "/comida_3.svg",
    },
    {
      name: "Cherry Cobbler on the Grill",
      img: "/comida_4.svg",
    },
  ];

  return (
    <section className={styles.recipesContainer}>
      <h2>Our Best Recipes</h2>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts.
      </p>
      <div className={styles.recipes}>
        {recipes.map((item, index) => {
          return (
            <div className={styles.recipesItem} key={index}>
              <Image
                src={item.img}
                alt={item.name}
                height={200}
                width={200}
                objectFit="cover"
              />
              <div>
                <h2>{item.name}</h2>
                <button>See Recipe</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
