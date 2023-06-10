import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function NewFeedback() {
    const history = useHistory()
    const dispatch = useDispatch();
    
    const feeling = useSelector( store => store.feeling)
    const understanding = useSelector( store => store.understanding)
    const support = useSelector( store => store.support)
    const comments = useSelector( store => store.comments)
    
    // logging all the store/reducer after the submit btn
    console.log( feeling, understanding, support, comments);


    const handleNewFeedback = () => {
        history.push('/')

        dispatch( {type: 'GET_NEW_FEEDBACK'})

        console.log( feeling, understanding, support, comments);
    }

    


    return (
        <>
            <header>Feedback!</header>

            <br></br><br></br>

            <h3>Thank You!</h3>

            <br></br><br></br>

            <button onClick={handleNewFeedback}>Leave New Feedback</button>
        </>
    )
}

export default NewFeedback