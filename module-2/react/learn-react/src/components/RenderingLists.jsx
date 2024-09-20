const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];


  
export default function List() {

    const filterProfession = (prof) => {
        return filteredPeople = people.filter(person => 
            person.profession === prof
        )
    }

    // filter erlaubt uns nur einzelne Listenelemente zu behalten
    const onlyChemists = filterProfession("chemist")

    const listItems = onlyChemists.map(person =>
      <li>{person.name + ": " + person.profession}</li>
    );

    if (listItems.length == 0){
        return <h6>Kein Chemist gefunden</h6>
    }

    return <ul>{listItems}</ul>;
}
  