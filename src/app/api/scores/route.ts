import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const scoresFilePath = path.resolve(
  process.cwd(),
  "src",
  "data",
  "scores.json"
);

interface Score {
  score: number;
  wallet: string;
}

const getScores = (): Score[] => {
  if (!fs.existsSync(scoresFilePath)) {
    console.log("Scores file does not exist, returning empty array.");
    return [];
  }
  try {
    const fileContents = fs.readFileSync(scoresFilePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Error reading scores file:", error);
    return [];
  }
};

const saveScores = (scores: Score[]) => {
  try {
    const dirPath = path.dirname(scoresFilePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(scoresFilePath, JSON.stringify(scores, null, 2));
  } catch (error) {
    console.error("Error saving scores:", error);
    throw error;
  }
};

export async function GET() {
  try {
    const scores = getScores();
    return NextResponse.json(scores);
  } catch (error) {
    console.error("Error fetching scores:", error);
    return NextResponse.json(
      { error: "Error fetching scores" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const text = await request.text();
    console.log("Received data:", text);

    let data;
    try {
      data = JSON.parse(text);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json({ error: "Invalid JSON data" }, { status: 400 });
    }

    const { score, wallet } = data;
    if (!wallet || typeof score !== "number") {
      return NextResponse.json(
        { error: "Invalid data format" },
        { status: 400 }
      );
    }

    let scores = getScores();
    const existingScoreIndex = scores.findIndex((s) => s.wallet === wallet);

    if (existingScoreIndex !== -1) {
      if (scores[existingScoreIndex].score < score) {
        scores[existingScoreIndex].score = score;
      }
    } else {
      scores.push({ score, wallet });
    }

    saveScores(scores);
    return NextResponse.json(
      { message: "Score added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json({ error: "Error saving score" }, { status: 500 });
  }
}
