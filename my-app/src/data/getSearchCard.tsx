import {useEffect, useState} from "react";
import { ItemsType } from "../type";

export const useGetSearchCard = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState<ItemsType[]>([]);

    const [q, setQ] = useState('');
    const[searchParam] = useState(['title','subtitle'])
    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/:q")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setItems(data.books);
                },

                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if(error){

    // @ts-ignore
    return <div>{error.message}</div>;
} else if(!isLoaded ){
return  <div>loading...</div> }
    else{
        return(
    <div className="wrapper">
        <div className="search-wrapper">
            <label htmlFor="search-form">
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Search for..."
                    value={q}
                    /*
                    // set the value of our useState q
                    //  anytime the user types in the search box
                    */
                    onChange={(e) => setQ(e.target.value)}
                />
                <span className="sr-only">Search countries here</span>
            </label>
        </div>
        <ul className="card-grid">
            {items.map((item) => (
                <li>
                    <article className="card" key={item.title}>
                        <div className="card-image">
                            <img src={item.subtitle} alt={item.price}/>
                        </div>
                        <div className="card-content">
                            <h2 className="card-name">{item.image}</h2>
                            <ol className="card-list">
                                <li>
                                    population:{" "}
                                    <span>{item.isbn13}</span>
                                </li>
                            </ol>
                        </div>
                    </article>
                </li>
            ))}
        </ul>
    </div>
);
}

}