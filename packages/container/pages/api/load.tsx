import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");

    return res;
  }

  // TODO: pull hashmap from assets
  // and compose them.

  console.log(req.url);

  return res;
}
