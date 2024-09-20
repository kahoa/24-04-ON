/* function Item({ name, isPacked }) {

    let text = name
    if (isPacked){
        text = text + " ✅"
    }
    return <li className="item">{text}</li>

    /**
    return (<li className="item">
                {isPacked ? (
                    <del>
                        {name + " ✅"}
                    </del>
                ) : name}
            </li>)

     
        
}
  

export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={false} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
}
  */

function Item({ name, importance }) {
    return (
      <li className="item">
        {name} 
        {/*importance !== 0 ? "(Wichtigkeit: " + importance + ")" : ""*/}
        {importance !== 0 && " (Wichtigkeit: " + importance + ")"}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Space suit" 
          />
          <Item 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }
