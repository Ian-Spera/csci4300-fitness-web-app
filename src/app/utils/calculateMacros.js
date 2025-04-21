export function calculateMacros({weightLbs, heightCm, age, gender, activityLevel, goal}) {
    const weightKg = weightLbs * 0.453592;

    const bmr = gender === 'male'
        ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5 :
        10 * weightKg + 6.25 * heightCm - 5 * age - 161;

    const activityMultipliers = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        veryActive: 1.9
    };

    const tdee = bmr * activityMultipliers[activityLevel];

    let adjustedCalories = tdee;
    if (goal === 'cut') adjustedCalories -= 500;
    if (goal === 'bulk') adjustedCalories += 250;

    const proteinPerLb = goal === 'bulk' ? 1.2 : 1.0;
    const fatPerLb = 0.4;

    const protein = weightLbs * proteinPerLb;
    const fat = weightLbs * fatPerLb;
    const carbs = (adjustedCalories - (protein * 4 + fat * 9)) / 4;

    return {
        calories: Math.round(adjustedCalories),
        protein: Math.round(protein),
        fat: Math.round(fat),
        carbs: Math.round(carbs),
    };

}

