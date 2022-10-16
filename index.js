function App(){

    const [Quotes, setQuotes] = React.useState ([])
    const [Random, setRandom] = React.useState ([])

    React.useEffect (() => {
        async function fetchQuotes () {
            const response = await fetch("https://type.fit/api/quotes")
            const data = await response.json();
            setQuotes(data)
            let randIndex = Math.floor(Math.random() * data.length)
            setRandom(data[randIndex])
        }
        fetchQuotes()
},{})

const getNewQuote = () => {
    let randIndex = Math.floor(Math.random() * Quotes.length)
            setRandom(Quotes[randIndex])
}
    return(
        <div id="quote-box" class = "flex justify-center"> 
        <div class = "block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <div class = "text-gray-900 text-xl leading-tight font-medium mb-2">
        
            <div className="text-gray-700 text-base mb-4">
            {Random ? (
                <>
                <h5 id="author" class = "py-3 px-6 border-t border-gray-300 text-gray-600">
                    - {Random.author || "None"}
                </h5>
                <p id="text" class = "py-3 px-6 border-t border-gray-300 text-gray-600">
                    &quot;{Random.text || "None"}&quot;
                </p>
                </>
            ) : (
                <h2>Loading</h2>
            )}
            <div id="new-quote" className="row">
                <button onClick = {getNewQuote} type="button" data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
    New Quote
    </button>
                <a id="tweet-quote"  href="twitter.com/intent/tweet" class ="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    <i class = "fa fa-twitter"></i>
                </a>
                <a href="" class ="inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                    <i class = "fa fa-tumblr"></i>
                </a>
            </div>
            {/*{Quotes.map((quote) => (
            <div>{quote.text}</div>
            ))}*/}
        
        
        </div>
        </div>
          
       
        </div>
        </div>
        
    )
}

ReactDOM.render(<App/>, document.getElementById('app'))