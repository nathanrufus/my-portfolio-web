import { IncomingForm } from "formidable";
import fs from "fs";
import path from "path";
import connectToDatabase from "@/lib/mongodb";
import Item from "@/models/Item";
import { NextResponse } from "next/server";

// Disable body parsing by Next.js since we're using formidable to handle it
export const config = {
  api: {
    bodyParser: false,
  },
  runtime: 'nodejs',
};

// Helper to parse the form data using formidable
const parseForm = async (req) => {
  const form = new IncomingForm({ uploadDir: './public/uploads/videos', keepExtensions: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      resolve({ fields, files });
    });
  });
};

// Handle POST requests
export async function POST(req) {
  try {
    await connectToDatabase();

    // Parse form data
    const { fields, files } = await parseForm(req);

    const { name, description, techstack } = fields;
    const videoFile = files.video ? `/uploads/videos/${path.basename(files.video.filepath)}` : null;

    if (!name || !description || !videoFile) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const newItem = new Item({
      name,
      description,
      video: videoFile,
      techstack: Array.isArray(techstack) ? techstack : techstack.split(","),
    });

    await newItem.save();

    return NextResponse.json({ success: true, data: newItem }, { status: 201 });
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Handle PUT requests (similar to POST)
export async function PUT(req) {
  try {
    await connectToDatabase();

    const { fields, files } = await parseForm(req);

    const { id, name, description, techstack } = fields;

    if (!id) {
      return NextResponse.json({ success: false, error: "Item ID is required" }, { status: 400 });
    }

    const updateData = {
      name,
      description,
      techstack: Array.isArray(techstack) ? techstack : techstack.split(","),
    };

    if (files.video) {
      const videoUrl = `/uploads/videos/${path.basename(files.video.filepath)}`;
      updateData.video = videoUrl;
    }

    const updatedItem = await Item.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedItem) {
      return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedItem });
  } catch (error) {
    console.error("Error in PUT request:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// Handle GET requests
export async function GET(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    let item;
    if (id) {
      item = await Item.findById(id);
      if (!item) {
        return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
      }
    } else {
      item = await Item.find();
    }

    return NextResponse.json({ success: true, data: item });
  } catch (error) {
    console.log("An error occurred:", error);
    return NextResponse.json({ success: false, error: "An error occurred" }, { status: 500 });
  }
}

// Handle DELETE requests
export async function DELETE(req) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, error: "Item ID is required" }, { status: 400 });
    }

    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
    }

    // Remove the associated video file if it exists
    if (item.video) {
      fs.unlinkSync(path.join(process.cwd(), `public${item.video}`));
    }

    return NextResponse.json({ success: true, data: "Item deleted successfully" });
  } catch (error) {
    console.log("An error occurred:", error);
    return NextResponse.json({ success: false, error: "An error occurred" }, { status: 500 });
  }
}
