'use server';

import { redirect } from 'next/navigation';
import { saveMeal } from './meals';

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

    await saveMeal(meal);

    redirect('/meals');
};

export { shareMeal };
