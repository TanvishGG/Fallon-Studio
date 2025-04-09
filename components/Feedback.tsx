
export type FeedbackType = {
    name: string;
    email: string;
    feedback: string;
    created_at: string;
}
export default function Feedback({feedback}: { feedback: FeedbackType }) {
    return (
        <div className="bg-foreground w-50 p-4 rounded-lg shadow mb-4">
            <h2 className="text-lg text-background font-bold">{feedback.name}</h2>
            <p className="text-background">{feedback.email}</p>
            <p className="mt-2 text-background">{feedback.feedback}</p>
            <p className="text-background text-sm mt-2 text-wrap">{new Date(feedback.created_at).toLocaleString()}</p>
        </div>
    )
}