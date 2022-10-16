marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer();

function App(){
    const [text, setText] = React.useState[""]
    return(
    <div class = "text-center">
        <h1 className="p-4">Markdown Previewer</h1>
        <textarea 
        name="text" 
        id="editor" 
        cols="30" 
        rows="10" 
        value = {text}
        onChange = {(e) => setText(e.target.value)}>

        </textarea>
        <h3 className="mt-3" id="preview">Output</h3>
        <Preview markdown = {text} />
    </div>
    )
}

function Preview ({markdown}){
    return (
        <div
            dangerouslySetInnerHTML = {{
                __html: marked(markdown, {renderer: renderer}),
            }}
            id = "preview"
            >
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('app'))