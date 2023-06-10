import axios from 'axios'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Feedback() {

    const history = useHistory()

    const dispatch = useDispatch();
    const feeling = useSelector( store => store.feeling)
    const understanding = useSelector( store => store.understanding)
    const support = useSelector( store => store.support)
    const comments = useSelector( store => store.comments)

    // AXIOX.POST
    const postFeedback = () => {

        

        axios.post("/feedback" , {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        })
        .then (response => {
            console.log(`Submitting feedbacks to server success`);
        })
        .catch ( err => {
            console.log(`Error in submitting feedback to server ${err}`);
        })

        history.push('/page-5')

        
    }

    // const feedBackData = useSelector( store => store.feedbackData)

    // const fetchFeedback = () => {
    //     axios.get( '/feedback')
    //     .then ( response  => {
    //         dispatch( { type: 'GET_FEEDBACK', payload: response.data })
    //     })
    //     .catch( err => {
    //         console.log(`Could not GET Feedback ${err}`);
    //         alert(`Try again later`)
    //     })
    // }


    // useEffect( () => {
    //     fetchFeedback()
    // }, [])

    return (
        <>

        <h2>Review Your Feedback</h2>

        <br></br><br></br>
       
        <div>
                {/* grab data Feelings from server */}
                <p>Feelings: {feeling} </p>

                <br></br>
                
                {/* grab data Understanding from server */}
                <p>Understanding: {understanding} </p>

                <br></br>
                {/* grab data Support from server */}
                <p>Support: {support} </p>

                <br></br>

                {/* grab comments from server */}
                <p>Comments: {comments} </p>
        </div>

        <button onClick={postFeedback}>SUBMIT</button>

        </>
    )
}

export default Feedback