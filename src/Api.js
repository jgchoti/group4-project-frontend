// This is fixed, we'll see later how to update it.
// const url = "http://localhost:5000/";

// const Api = {
//   getRecipes: async () => {
//     const response = await fetch(url + "recipes");
//     return response.json();
//   },
// };

// export default Api;

const Api = async (endpoint) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log("url", apiUrl)
    try {
        const response = await fetch(`${apiUrl}/${endpoint}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default Api;