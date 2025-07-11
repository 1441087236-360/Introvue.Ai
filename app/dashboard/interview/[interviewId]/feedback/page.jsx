"use client";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();
  useEffect(() => {
    GetFeedback();
  }, []);
  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    console.log(result);
    setFeedbackList(result);
  };

  return (
    <div className="p-10">
      {feedbackList?.length == 0 ? (
        <h2 className="font-bold text-xl text-white">
          <span className="p-2 bg-secondary rounded">No Interview Feedback Record Found</span>
        </h2>
      ) : (
        <>
          <h2 className="text-3xl font-bold text-blue-950">Congratulation!</h2>
          <h2 className="font-bold mt-8 mb-8 text-white text-2xl">
            <span className="p-2 bg-secondary rounded ">Here is your interview feedback ...</span>
          </h2>

          {/* <h2 className='text-primary text-lg my-3'>Your overall interview rating: <strong>7/10</strong></h2> */}

          <h2 className="text-sm text-gray-500">
            Find below interview question with correct answer, Your answer and
            feedback for improvement
          </h2>
          {feedbackList &&
            feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger
                  className="p-2
             bg-secondary rounded-lg flex justify-between
            my-2 text-left text-white gap-7 w-full"
                >
                  {item.question} <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2">
                    <h2
                      className={`${
                        item.rating > 5 ? "text-green-500" : "text-red-500"
                      } p-2 border rounded-lg`}
                    >
                      <strong className="text-red-500">Rating:</strong>{" "}
                      {item.rating}/10
                    </h2>

                    <h2 className="p-2 border rounded-lg bg-red-200 text-sm text-red-950">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-200 text-sm text-green-950">
                      <strong>Correct Answer: </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-blue-200 text-sm text-blue-950">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
        </>
      )}

      <Button className="text-white font-semibold bg-black hover:text-black hover:bg-white" onClick={() => router.replace("/dashboard")}>Go Home</Button>
    </div>
  );
}

export default Feedback;