import mongoose from "mongoose";

const resourceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    type: {
      type: String,
      enum: [
        "github",
        "documentation",
        "youtube",
        "article",
        "website",
        "code",
        "note",
      ],
      required: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    notes: {
      type: String,
      trim: true,
      maxlength: 2000,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Resource =
  mongoose.models.Resource ||
  mongoose.model("Resource", resourceSchema);

export default Resource;