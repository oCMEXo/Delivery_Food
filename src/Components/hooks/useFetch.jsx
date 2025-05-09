import { useState, useEffect } from "react";

export function useFetch(url, options = {}) {
    const [data, setData] = useState(null);
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            try {

                console.log(`Fetching: ${url}`);

                const response = await fetch(url, options);
                setStatus(response.status);

                const result = await response.json();
                setData(result);

                console.log("Response Status:", response.status);
                console.log("Response Payload:", result);

            } catch (err) {
                setError(err);
                console.error("Fetch Error:", err);
            }
        };

        fetchData();
    }, [url]);

    return { data, status, error };
}
