
import styles from './Joke.module.scss';
import { useJoke } from './JokeVM';

const Joke = () => {
    const { joke, error, loading, handleGetJoke } = useJoke();
    return (
        <div className={styles.joke}>Joke
            {loading?<span>Loading...</span>:<p>{joke?.joke}</p>}
            {error && <div>{error}</div>}
            <button onClick={handleGetJoke}>Reload joke</button>
        </div>
    );
}

export default Joke