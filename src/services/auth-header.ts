export default function authHeader() {
    
    const userJSON = localStorage.getItem('user');
  
    if (userJSON) {
      const user = JSON.parse(userJSON);
  
      if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
      } 
    }
    
    return {}; // Retourne un objet vide par défaut si l'utilisateur n'est pas authentifié ou si les informations d'authentification sont manquantes
  }