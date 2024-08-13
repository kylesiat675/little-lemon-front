import chef from '../little_lemon_assets/Mario and Adrian b.jpg'
export default function Main(){
    return <main>
        <div>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                Bringing you good food and good memories for the whole family. We hope you enjoy your stay at Little Lemon Restaurant!
            </p>
        </div>
        <div>
            <img id="chef" src={chef} ></img>
        </div>
    </main>
}