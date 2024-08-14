'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

function isValidText(text) {
    return !!text && text.trim() !== '';
}

const shareMeal = async (formData) => {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email'),
    };
    console.log('Share meal', meal);

    if (
        !isValidText(meal.title) ||
        !isValidText(meal.summary) ||
        !isValidText(meal.instructions) ||
        !isValidText(meal.creator) ||
        !isValidText(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image ||
        meal.image.size === 0
    ) {
        throw new Error('Invalid input');
    }

    await saveMeal(meal);

    redirect('/meals');
};

export { shareMeal };
