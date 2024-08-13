import food from "../little_lemon_assets/greek salad.jpg"
export default function Menu(){
    return <>
        <div id="background">
            <div>
                <h1>Menu</h1>
            </div>
            <div>
                <img id="food" src={food} height="300" alt="greek salad"></img>
            </div>
        </div>
    </>
}