//Model represents data -object representation of data

import mangoose from "mongoose";

//define the structure and properties of the JSON object
const Schema = mangoose.Schema(
  {
    title: {
      type: String,
      required: "Title is required.",
    },
    description: {
      type: String,
      required: "Description is required.",
    },
    status: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      required: "time is required",
    },

    time: {
      type: String,
      required: "time is required",
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    lastModifiedDate: {
      type: Date,
      default: Date.now,
    },
  },
  { versionKey: false }
);

//A virtual property named id will be copied and converted into hexa-decimal string
Schema.virtual("id", () => {
  this._id.toHexString();
});

// Converting the virtual id to JSON
Schema.set("toJSON", { virtuals: true });

//create a items model to export
const model = mangoose.model("item", Schema);

export default model;
