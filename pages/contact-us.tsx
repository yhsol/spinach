import { useRouter } from "next/router";
import React from "react";

function ContactUs() {
  const router = useRouter();
  const { data } = router.query;
  const decodedData = JSON.parse(decodeURIComponent(data as unknown as string));
  console.log("log=> 받는 쪽 decodedData: ", decodedData);

  const [userName, setUserName] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");

  return (
    <div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Name</label>
        <input type="text" value={userName} />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Work email</label>
        <input type="text" value={userEmail} />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">What is your plan?</label>
        <select name="" id="">
          <option value="">free</option>
          <option value="">pro</option>
          <option value="">enterprise</option>
        </select>
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">What can we help you with?</label>
        <select name="" id="">
          <option value="">Troubleshooting</option>
          <option value="">Other</option>
          <option value="">feedback for beta features</option>
        </select>
      </div>
      {userName && (
        <div
          style={{
            borderBottom: "1px solid black",
            padding: "18px",
            backgroundColor: "blue",
          }}
        >
          <label htmlFor="">Feedback</label>
          <select name="" id="">
            {(userName as string).split(",").map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      )}
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">I encountered an issue involving</label>
        <select name="" id="">
          <option value="">Protopie Studio</option>
          <option value="">Protopie Player</option>
          <option value="">Protopie Cloud</option>
          <option value="">Protopie Connect</option>
          <option value="">Other</option>
        </select>
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Describe the issue</label>
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Pie file</label>
        <input type="file" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Screenshot</label>
        <input type="file" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">ProtoPie Studio version</label>
        <input type="text" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Operating system</label>
        <input type="text" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Operating system version</label>
        <input type="text" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">
          Screenshot of computer specifications (Maximum total upload size:
          20MB)
        </label>
        <input type="file" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Log file(s)</label>
        <input type="file" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Sketch, Adobe XD or Figma version</label>
        <input type="text" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Sketch, Adobe XD or Figma file</label>
        <input type="file" />
      </div>
      <div style={{ borderBottom: "1px solid black", padding: "18px" }}>
        <label htmlFor="">Font file (Maximum total upload size: 20MB)</label>
        <input type="file" />
      </div>
    </div>
  );
}

export default ContactUs;
