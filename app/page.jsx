import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Ethnic & Ethnicity
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          The Ethnicity of Power vs Power of Ethnicity
        </span>
      </h1>
      <p className="desc text-center">
        Ethnicity refers to the identification of a group based on a perceived
        cultural distinctiveness that makes the group into a “people.”
      </p>

      <Feed />
    </section>
  );
};

export default Home;
