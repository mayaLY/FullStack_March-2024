import { useJoke } from "./JokeVM";
import styles from './Joke.module.scss';
import { useState } from "react";

const Joke = () => {
    const { joke, error, loading, handleGetJoke, handleAddJoke } = useJoke();
    const [setup, setSetup] = useState<string>(""); 
    const [punchline, setPunchline] = useState<string>("");

  
    const addJoke = () => {
        if (!setup || !punchline) {
          alert("Please enter both a setup and a punchline for the joke.");
          return;
        }
        const newJoke = {
            id: Date.now().toString(),
            setup,
            punchline,
            joke: `${setup} - ${punchline}`, 
          };
          handleAddJoke(newJoke); 
          setSetup(""); 
          setPunchline(""); 
        };
        return (
            <div className={styles.joke}>
              <h1>Joke</h1>
              {loading && <span>Loading...</span>}
              {!loading && joke && joke.setup && joke.punchline && (
                <p>{joke.setup} - {joke.punchline}</p>
                )}
                 {!loading && joke && !joke.setup && !joke.punchline && (
              <p>{joke.joke}</p>
                 )}
              {error && <div className={styles.error}>{error}</div>}
        
              <button onClick={handleGetJoke}>Reload Joke</button>
        
              <div className={styles.addJoke}>
                <h2>Add a New Joke</h2>
                <input
                  type="text"
                  placeholder="Enter setup"
                  value={setup}
                  onChange={(e) => setSetup(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter punchline"
                  value={punchline}
                  onChange={(e) => setPunchline(e.target.value)}
                />
                <button onClick={addJoke}>Add Joke</button>
              </div>
            </div>
          );
        };
    
    export default Joke;