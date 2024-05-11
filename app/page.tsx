import CategoryList from "./_components/categorylist";
import Header from "./_components/header";
import Search from "./_components/search";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <div className="px-5 pt-6">
        <CategoryList />
      </div>
      <div className="px-5 pt-6">
        <Image
          src="/promo-banner-01.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full"
          sizes="100vw"
          quality={100}
        />
      </div>
    </>
  );
};

export default Home;
