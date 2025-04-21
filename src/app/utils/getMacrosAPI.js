async function getMacros(foodQuery) {
    const apiUrl = `https://api.api-ninjas.com/v1/nutrition?query=${encodeURIComponent(foodQuery)}`;
    const apiKey = 'Qoh5McG6OwOdzN7kFDrlJQ==1QdEzb052f7Y1i0T';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();

        if (!data || data.length === 0) {
            throw new Error('No nutrition data found for the given query.');
        }

        // Extract macros for each item
        const macrosList = data.map(item => ({
            name: item.name,
            calories: item.calories,
            protein: item.protein_g,
            fat: item.fat_total_g,
            carbs: item.carbohydrates_total_g
        }));

        return macrosList;
    } catch (error) {
        console.error('Error fetching nutrition data:', error.message);
        return null;
    }
}

export default getMacros;

getMacros("100g steak" ).then(console.log);