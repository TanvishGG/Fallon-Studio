import { useEffect, useState } from "react";
import { FeedbackType } from "./Feedback";
import Feedback from "./Feedback";
import axios from "axios";


export default function Feedbacks() {
    const [feedbacks, setFeedbacks] = useState<FeedbackType[]>([]);

    useEffect(() => {
        axios.get("/api/feedbacks")
            .then((response) => {
                setFeedbacks(response.data);
            })
            .catch((error) => {
                console.error("Error fetching feedbacks:", error);
            }
        );
    }
    , []);
    return (
        <div className="flex flex-col w-screen mt-20 items-center justify-center">
            <h1 className="text-2xl font-bold mb-4">Feedbacks</h1>
            <div className="w-screen flex justify-center flex-wrap gap-5 overflow-y-hidden overflow-x-auto">
                {feedbacks.map((feedback, index) => (<Feedback key={index} feedback={feedback}/>))}
            </div>
        </div>
    );

}