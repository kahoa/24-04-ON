import "./card.css"

function Avatar({person, size = 100}) {
    return (
      <img
        className="avatar"
        src={"https://i.imgur.com/" + person.imageId + ".jpg"}
        alt={person.name}
        width={size}
        height={size}
      />
    );
}

function Card({ children }) {
    return (
      <div className="card">
        {children}
      </div>
    );
  }
  
export default function Profile() {
    return (
        <>
        <Card>
            <Avatar
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            />
            <Avatar
                person={{ name: 'Gregorio Y. Zara', imageId: '7vQD0fP' }}
                size={100}
            />
        </Card>

        <Card>
            <p>Andere Card!</p>
            <p>Yippee</p>
        </Card>
        </>
    );
}
  