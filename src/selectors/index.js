// on définit notre sélecteurs getHighestId
// Un sélecteur (selector) permet de faire une projection du state
// C'est à dire de déduire une information à partir des données
// brutes stockées dans le state.
// eslint-disable-next-line import/prefer-default-export
export const getHighestId = (state) => {
  // on récupère seulement les ids
  // on transforme notre tableau de message en un tableu de nombre
  const idsList = state.messages.map(
    (message) => message.id,
  );

  // si on a au moins un élément
  // on retourne le plus grand des élément
  if (idsList.length > 0) {
    return Math.max(...idsList);
  }
  // sinon (implicite), je retourne 0
  return 0;
};
