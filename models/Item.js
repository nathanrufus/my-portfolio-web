import mongoose from "mongoose"

const ItemSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	video: {
		type: String, // Assuming it's a URL to the video
		required: true,
	},
	techstack: {
		type: [String], // An array of strings representing the tech stack
		required: true,
	},
})
const Item =
	mongoose.models.Item ||
	mongoose.model("Item", ItemSchema)
export default Item
