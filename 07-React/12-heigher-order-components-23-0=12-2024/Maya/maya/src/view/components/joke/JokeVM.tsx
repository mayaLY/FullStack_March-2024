import { useState, useEffect } from "react";
import { JokeModel } from "./jokeModel";
import { set } from "mongoose";


interface UseJokeOutput {
    joke:JokeModel;
    error:string;
}

export function GetJokeOutput():UseJokeOutput{
    try
    const [joke, setjoke] = useState<JokeModel | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        getJoke

}