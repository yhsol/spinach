import { useRouter } from "next/router";
import React from "react";

function Contact() {
  const router = useRouter();

  const onFeedbackClick = () => {
    const data = {
      name: "test",
      email: "test@example.com",
      feedback: ["feature 1", "feature 2", "feature 3"].toString(),
    };

    // const queryParams = new URLSearchParams(data).toString();
    // console.log("log=> 보내는 쪽 queryParams", queryParams);

    const queryString = encodeURIComponent(JSON.stringify(data));
    console.log(
      "log=> 보내는 쪽 queryString",
      "https://www.protopie.io/form/contact-us?data=%7B%22firstName%22%3A%22paul%22%2C%22lastName%22%3A%22paul%22%2C%22email%22%3A%22paulpaul%40protopie.io%22%2C%22plan%22%3A%22pro_plan%22%7D"
    );

    router.push({
      pathname: "/contact-us",
      query: {
        data: "%7B%22firstName%22%3A%22paul%22%2C%22lastName%22%3A%22paul%22%2C%22email%22%3A%22paulpaul%40protopie.io%22%2C%22plan%22%3A%22pro_plan%22%7D",
      },
    });
  };

  return <button onClick={onFeedbackClick}>Go to feedback</button>;
}

export default Contact;
