import styles from "./AddMovieForm.module.css";


function AddMovieForm() {
    return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
          className={styles.form__image}
          src="https://picsum.photos/536/354"
          alt="placeholder"
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie</h2>
          <form action="/handlelogin">
            <label className={styles.form__label} for="title">Title</label><br />
            <input className={styles.form__input} type="text" id="title" name="title" value="" /><br />
            <label className={styles.form__label} for="year">Year</label><br />
            <input className={styles.form__input} type="year" id="year" name="year" value="" /><br /><br />
            <input className={styles.form__button} type="submit" value="Submit" />
          </form>
        </div>
      </section>
    </div>
    );
}

export default AddMovieForm;

