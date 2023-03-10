const { Schema, model, Types } = require('mongoose');
// Moment module to format  timstamp
const moment = require("moment");

// Reaction schema
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody:{
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal =>
                moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
        }
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Schema to create Thoght model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
      moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a")
    },
    username: 
      {
        type: String,
        required: true
      },

// Array of nested docuemnts created with reactionSchema
    reactions: [reactionSchema],
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
    id: false,
  }
);


// Get total reaction count
thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length
});

// Initialize Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
