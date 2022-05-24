import React, { useState } from 'react';
import quotes from './../Data/quotes';
import './../App.css';

function Quotes() {
    const [index, setIndex] = useState(0);
    const [searched, setSearched] = useState('');
    const [quoteList, setQuoteList] = useState([{
        Quote: quotes[0].Quote,
        Author: quotes[0].Author,
        Category: quotes[0].Category,
        Tags: quotes[0].Tags,
        Popularity: quotes[0].Popularity,
    }]);
    const [flag, setFlag] = useState(false);
    const handleNext = () => {
        if (quoteList.length - index > 1) {

            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    const handleClck = () => {
        setQuoteList(quotes);
        setFlag(true);
        setIndex(Math.floor(Math.random() * quoteList.length));
    }
    const handleSearch = (e) => {
        setSearched(e.target.value);
    }
    const onSubmit = (event) => {
        setFlag(false);
        event.preventDefault();
        if (searched) {
            setIndex(0);
            if (quotes.find(e => e.Author.toLowerCase() === searched.toLowerCase())) {
                const authorSer = quotes.filter(q => q.Author.toLowerCase().split(",")[0] === searched.toLowerCase());
                if (authorSer !== undefined) {
                    setQuoteList(authorSer);
                    console.log(quoteList);
                    setFlag(true);
                }
            } else if (quotes.find(q => q.Tags.find(t => t.toLowerCase() === searched.toLowerCase()))) {
                const tagSer = quotes.filter(q => q.Tags.find(t => t.toLowerCase() === searched.toLowerCase()));
                if (tagSer !== undefined) {
                    setQuoteList(tagSer);
                    setFlag(true);
                }
            } else if (quotes.find(q => q.Category.toLowerCase() === searched.toLowerCase())) {
                const catSer = quotes.filter(q => q.Category.toLowerCase() === searched.toLowerCase());
                if (catSer !== undefined) {
                    setQuoteList(catSer);
                    setFlag(true);
                }
            }
        }
    }

    return (
        <div>
            <nav className="columns">
                <button className="custom-button" onClick={handleClck}>Random Quote</button>
                <input className="custom-input" type="search" onChange={handleSearch} placeholder="Search...">
                </input>
                <button className="custom-button" onClick={onSubmit}>Search</button>
                {flag ? <button justify='right' className="custom-button" onClick={handleNext}>Next {quoteList.length - index}</button> : null
                }
            </nav>
            <main className="card border-primary">
                <article>
                    <p>{quoteList[index].Author}</p>
                    <q className="card-quote">
                        {quoteList[index].Quote}
                    </q>

                    <p >
                        {quoteList[index].Category}
                    </p>
                    <div className="tag-grid grid-col-span-2">
                        {quoteList[index].Tags.map(tag => (
                            <p>
                                {tag}
                            </p>
                        ))}
                    </div>
                </article>
            </main>
        </div>
    );
}
export default Quotes;


