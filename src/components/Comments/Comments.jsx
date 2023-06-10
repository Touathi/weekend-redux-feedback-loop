import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Comments() {

    const dispatch = useDispatch();
    const history = useHistory()
    const [comments, setComments] = useState('')

    const handleNext = (event) => {
        event.preventDefault();
        history.push('/page-4')
        
        dispatch( {type: "GET_COMMENTS", payload: comments} )
        
        setComments('')
    };

    console.log(`My comment is ${comments}`);

    return (
        <>
        <h2>Any comments you want to leave?</h2>

        <br></br><br></br><br></br>
        
        <form>
            <label htmlFor="comment">Comments</label>
            <input 
                type="text"
                id='commentsInput' 
                name='comments'
                value={comments}
                onChange={(evt) => (setComments(evt.target.value))}
                // Fix so that a value is require before going to next page
                required
            />
            <button onClick={handleNext}>Next</button>
        </form>
        </>
    )
}

export default Comments