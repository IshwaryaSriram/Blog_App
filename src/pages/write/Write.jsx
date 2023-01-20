import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
            src="https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1067&q=80"
            className="writeImg"
            alt=""
        />
        
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i class="fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{"display":"none"}}/>
                <input type="text" placeholder="Title" className="writeInput"/>

            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Enter Text" type="text" className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
