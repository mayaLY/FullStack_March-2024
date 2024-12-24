import { useEffect, useState } from "react";
import { JokeModel } from "./JokeModel";

interface UseJokeOutput {
    joke: JokeModel | null;
    error: string | null;
    loading: boolean;
    handleGetJoke: () => void;
}

export function useJoke(): UseJokeOutput {
    try {
        const [joke, setJoke] = useState<JokeModel | null>(null);
        const [error, setError] = useState<string | null>(null);
        const [loading, setLoading] = useState<boolean>(false);

        useEffect(() => {
            getJoke();
        }, []);

        function getJoke() {
            setLoading(true);
            fetch("http://localhost:3000/api/jokes/get-random-joke")
                .then(response => response.json())
                .then(data => {
                    setJoke(data);
                    setLoading(false);
                }).catch(error => {
                    setError(error.message);
                });
        }   

        function handleGetJoke() {
            getJoke();
        }

        return {
            joke,
            error,
            loading,
            handleGetJoke
        };
    } catch (error: any) {
        return {
            joke: null,
            error: error.message,
            loading: false,
            handleGetJoke: () => {}    
        }
    }
}