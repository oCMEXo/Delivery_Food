import { useState, useEffect } from "react";

interface UseFetchOptions extends RequestInit {}

interface UseFetchResult<T> {
    data: T | null;
    status: number | null;
    error: Error | null;
}

export function useFetch<T = any>(
    url: string | null,
    options: UseFetchOptions = {}
): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [status, setStatus] = useState<number | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {
                console.log(`Fetching: ${url}`);

                const response = await fetch(url, options);
                setStatus(response.status);

                const result = (await response.json()) as T;
                setData(result);

                console.log("Response Status:", response.status);
                console.log("Response Payload:", result);
            } catch (err) {
                const error = err instanceof Error ? err : new Error(String(err));
                setError(error);
                console.error("Fetch Error:", error);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options)]);

    return { data, status, error };
}
