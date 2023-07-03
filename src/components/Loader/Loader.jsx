import classes from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={classes.loaderLayout}>
      <img src="/loader.svg" alt="Loading. Please wait." width={100} />;
    </div>
  );
};

export default Loader;
