'use client';

import { useState } from "react";
import FeedbackForm from "@/components/Form";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feedbacks from "@/components/Feedbacks";
export default function Home() {
  const [showFeedbacks, setShowFeedbacks] = useState(false);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
       <Header setShowFeedbacks={setShowFeedbacks} />
        { showFeedbacks ? <Feedbacks />: <FeedbackForm /> }
        <Footer />
    </main>
  );
}
