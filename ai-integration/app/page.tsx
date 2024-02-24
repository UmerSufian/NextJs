"use client"

import { useState } from "react";

export default function ImageGenerator() {
    const [text, setText] = useState("");
    const [url, setUrl] = useState("");
    const [loader, setLoader] = useState(false);


    const query = async (data) => {
        console.log("data: ", data);

        const response = await fetch(
            "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.blob();
        const output = URL.createObjectURL(result);
        return output;
    };

    const onClickHandler = async () => {
        try {
            setLoader(true);
            const input = { "inputs": text };
            const result = await query(input);
            console.log("result", result);
            setUrl(result);

        } catch (error) {
            console.log("error", error);
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center mt-28">
            <div className="w-full max-w-md p-6 mb-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                    NextGen Image Generator
                </h2>
                <p className="mb-6 text-base text-gray-600 dark:text-gray-400">
                    Stable Diffusion is a latent text-to-image diffusion model capable of generating photo-realistic images given any text input.
                </p>
                <textarea
                    id="message"
                    rows={4}
                    className="block w-full px-3 py-2 text-sm text-gray-800 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:ring-blue-400 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-500 dark:focus:ring-blue-500"
                    placeholder="Write your thoughts here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button
                    onClick={onClickHandler}
                    type="button"
                    className="inline-block w-full px-4 py-2 mt-4 font-semibold text-center text-white transition-colors duration-300 ease-in-out transform bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-400"
                >
                    {loader ? (
                        <svg
                            className="w-6 h-6 mr-3 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 4.418 3.582 8 8 8v-4zM20 12a8 8 0 01-8 8v4c4.418 0 8-3.582 8-8h-4zm-2-5.291A7.962 7.962 0 0120 12h4c0-4.418-3.582-8-8-8v4z"></path>
                        </svg>
                    ) : (
                        "Generate"
                    )}
                </button>
            </div>
            {url && (
                <div className="flex justify-center">
                    <img className="w-60 h-60 rounded-lg" src={url} alt="" />
                </div>
            )}
        </div>
    );
}
