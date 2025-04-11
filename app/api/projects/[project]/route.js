import connectToDatabase from "@/lib/mongodb";
import Item from "@/models/Item";
import multer from "multer";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

// Setup multer for video uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/uploads/videos", // Save videos in the specified folder
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Middleware to handle file uploads
async function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing for file uploads
  },
};

// Handle GET requests
export async function GET(request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

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

// Handle PUT requests
export async function PUT(request) {
  await runMiddleware(request, request, upload.single("video"));

  try {
    await connectToDatabase();

    const { id, name, description, techstack } = request.body;

    if (!id) {
      return NextResponse.json({ success: false, error: "Item ID is required" }, { status: 400 });
    }

    const updateData = {
      name,
      description,
      techstack: techstack.split(","), // Assuming techstack is a comma-separated string
    };

    if (request.file) {
      const videoUrl = `/uploads/videos/${request.file.filename}`;
      updateData.video = videoUrl;
    }

    const updatedItem = await Item.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedItem) {
      return NextResponse.json({ success: false, error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updatedItem });
  } catch (error) {
    console.log("An error occurred:", error);
    return NextResponse.json({ success: false, error: "An error occurred" }, { status: 500 });
  }
}

// Handle DELETE requests
export async function DELETE(request) {
  try {
    await connectToDatabase();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

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
