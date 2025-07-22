fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('recipes');
    data.recipes.forEach(recipe => {
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.name}" />
        <h3>${recipe.name}</h3>
        <p>${recipe.desc}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(error => {
    document.getElementById('recipes').innerHTML = '<p>Failed to load recipes 😢</p>';
  });
