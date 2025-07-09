function generateDomainNames() {
  // Listas de palabras para combinar
  let pronouns = ['the', 'our', 'my', 'your'];
  let adjs = ['great', 'big', 'happy', 'smart'];
  let nouns = ['jogger', 'racoon', 'developer', 'panda'];
  let tlds = ['.com', '.net', '.io', '.dev'];

  // Array para almacenar los resultados
  let domainNames = [];

  // Generar todas las combinaciones posibles
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let tld of tlds) {
          // Crear el nombre de dominio y añadirlo al array
          let domain = pronoun + adj + noun + tld;
          domainNames.push(domain);
        }
      }
    }
  }

  return domainNames;
}

// Función para mostrar los resultados en la consola
function displayDomainNames() {
  const domains = generateDomainNames();
  
  console.log("Nombres de dominio generados:");
  console.log("----------------------------");
  
  for (let domain of domains) {
    console.log(domain);
  }
  
  console.log(`\nTotal de dominios generados: ${domains.length}`);
}

// Ejecutar la función principal
displayDomainNames();