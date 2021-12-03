import {
  Box,
  Button,
  Circle,
  Heading,
  HStack,
  Spacer,
  Text,
  VStack
} from "@chakra-ui/react";
import { useState } from "react";
import { CategoryCircleLink } from "../components/elements/CategoryCircleLink";
import ItemForSale from "../components/elements/ItemForSale";
import { CommonLayout } from "../components/layouts/Common";
import { CarouselImages } from "../components/modules/CarouselImages";
import { CategoriesSection } from "../components/modules/CategoriesSection";
import SmallCentered from "../components/modules/Footer";
import { SliderSectionItems } from "../components/modules/SliderSectionItems";
import { firestore } from "../lib/firebase";
const dinamycsFields = [2, 3, 4];

// a function that generate a lorem ipsum paragraph
function loremIpsum(count: number): string {
  return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    .split(" ")
    .slice(0, count)
    .join(" ");
}
// a function that generate a random number between 0
function randomNumber(number = 500): number {
  return Math.floor(Math.random() * number);
}
const slides = [
  {
    src:
      "https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1620930093741-home-sliderdesktop-base.jpg"
  },
  {
    src:
      "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    src:
      "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
  },
  {
    src:
      "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  },
  {
    src:
      "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  }
];

// an IIFE that returns the collection 'category' which ParentID is equal to null
// (async () => {
//   const category = await firestore
//     .collection("category")
//     .where("ParentID", "==", null)
//     .get();
//   console.log(category.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
// })();
// (async () => {
//   const category = await firestore
//     .collection("category")
//     .where("ParentID", "==", "9dtR39LSSyXhZuoIqMO6")
//     .get();
//   console.log(category.docs.map((doc) => doc.data()));
// })();

// (async () => {
//   const categoryQuery = await firestore
//     .collection("category")
//     .where("title", "==", "clothing")
//     .get();

//   const subCategories = await firestore
//     .collection("category")
//     .where("ParentID", "==", categoryQuery.docs[0].id)
//     .get();

//   // console.log the name of the document

//   console.log(subCategories.docs.map((doc) => doc.data()));
// })();
(async () => {
  const productsResults = await firestore
    .collection("products")
    .where("categories", "array-contains", "tablets")
    .get();

  // console.log the name of the document

  console.log(productsResults.docs.map((doc) => doc.data()));
})();
const randomData = {
  categories: ["computers", "storage"],
  description: loremIpsum(randomNumber()),
  pricing: {
    price: randomNumber(),
    cryptocurrency: "USDT"
  },
  quantity: randomNumber(),
  shipping_details: {
    height: randomNumber(50),
    width: randomNumber(50),
    weight: randomNumber(50)
  },
  title:
    "2TB Desktop Hard Disk Drive - 5400 RPM SATA 6Gb/s 256MB Cache 3.5 Inch",
  images: ["https://i.imgur.com/TvU7hrm.jpg", "https://i.imgur.com/qvcRuHZ.jpg"]
};

const addToFirestore = (data: any) => {
  return firestore.collection("products").add(data);
};

const Index = () => {
  const [numberOfProductsAdd, setNumberOfProductsAdd] = useState(0);
  const addProducts = async function () {
    console.log("add products");
    await addToFirestore(randomData);
    setNumberOfProductsAdd(numberOfProductsAdd + 1);
    if (numberOfProductsAdd < 100) {
      await addProducts();
    }
  };
  addProducts();
  return (
    <CommonLayout maxW='full'>
      <CarouselImages images={slides} />
      <SliderSectionItems
        paddingTop='2rem'
        title='Ultima colección'
        elementWidth={240}
        spacing={4}
        amountOfItemInScreen={5}
      >
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />

        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />

        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
        <ItemForSale
          name='Bellas Joyas'
          price={1500}
          image={
            "https://img.ltwebstatic.com/images2_pi/2019/08/22/1566458621158052963_thumbnail_405x552.webp"
          }
        />
      </SliderSectionItems>
      <CategoriesSection
        paddingTop='5rem'
        paddingBottom='10rem'
        categories={[
          {
            title: "Categoría 1",
            href: "#"
          },
          {
            title: "Categoría 2",
            href: "#"
          },
          {
            title: "Categoría 3",
            href: "#"
          },
          {
            title: "Categoría 4",
            href: "#"
          }
        ]}
      />
    </CommonLayout>
  );
};

export default Index;
