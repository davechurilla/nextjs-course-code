// import { buildEventPath, extractEvent } from "../newsletter";

function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "POST") {
    const { email, name, text } = req.body;
    if (!email.includes("@") || !name || !text || text.trim() === "") {
      res.status(422).json({ message: "Invlid input." });
      return;
    }

    console.log(email, name, text);
    const newComment = {
      id: new Date().toISOString,
      email,
      name,
      text,
    };

    console.log(newComment);

    res.status(201).json({ message: "Added comment.", comment: newComment });

    if (req.method === "GET") {
      const dummyList = [
        { id: "c1", name: "Daver", text: "First comment" },
        { id: "c2", name: "Jack", text: "Second comment" },
      ];

      res.status.json({ comments: dummyList });
    }

    // const filePath = buildEventPath();
    // const eventData = extractEvent(filePath);
    // const selectedEvent = eventData.find((event) => event.id === eventId);
    // res.status(200).json({ event: selectedEvent });
  }
}
export default handler;
