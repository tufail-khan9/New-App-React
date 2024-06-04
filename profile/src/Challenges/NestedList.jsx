//import React from 'react';

export default function NestedList22()
{    
  const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
    return( 
     <>
      <h1>recipes</h1>
      {recipes.map(item => 
      <div key={item.id}>
        {item.name}
        <ul>
         {item.ingredients.map(item => 
         <li key={item}>
          {item}
         </li>
         )}
        </ul>
      </div>
      )}
     </>
     
    );
}