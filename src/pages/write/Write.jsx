import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
        className="writeImg"
        src="data:image/jpeg;base64,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"
        alt=""
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder="Tell your story..." type="text" className="writeInput writeText">
                </textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
    </div>
  )
}
