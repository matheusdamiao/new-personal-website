import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "./../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("Form");
      const collection = await db
        .collection("FormData")
        .find({})
        .limit(10)
        .toArray();
      return res.json(collection);
    } catch (e) {
      console.log(e);
    }
  }

  if (req.method === "POST") {
    try {
      const client = await clientPromise;
      const db = client.db("Form");
      const newItemAdded = await db.collection("FormData").insertOne(req.body);
      return res.json(newItemAdded);
    } catch (e) {
      console.log(e);
    }
  }
};
