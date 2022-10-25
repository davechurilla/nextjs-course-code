import fs from "fs";
import path from "path";

export function buildEventPath() {
  return path.join(process.cwd(), "data", "event.json");
}

export function extractEvent(filePath) {
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);
  return data;
}

function handler(req, res) {
  if (req.method === "POST") {
    const userEmail = req.body.email;
    // const eventText = req.body.text;
    console.log(userEmail);
    res.status(201).json({ message: "Signed up!" });

    // const newEvent = {
    //   id: new Date().toISOString(),
    //   email: userEmail,
    //   text: eventText,
    // };

    // store that in a database or in a file
    //   const filePath = buildEventPath();
    //   const data = extractEvent(filePath);
    //   data.push(newEvent);
    //   fs.writeFileSync(filePath, JSON.stringify(data));
    //   res.status(201).json({ message: "Success!", event: newEvent });
    // } else {
    //   const filePath = buildEventPath();
    //   const data = extractEvent(filePath);
    //   res.status(200).json({ event: data });
    // }
  }
}
export default handler;
