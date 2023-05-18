import { Schema, model, Document } from "mongoose"
import { QuestionDocument } from "./question.model";

export type ExerciseDocument = Document & {
	title: string;
	skill: string
	questionCategory: string;
	questions: QuestionDocument[];
	createdAt: Date;
}

enum ExerciseQuestionCategory {
	Photographs = 'Photographs',
	QuestionResponses = 'Question Responses',
	ShortTalks = 'Short Talks',
	TextCompletion = 'Text Completions',
	Conversations = 'Conversations',
	IncompleteSentences = 'Incomplete Sentences',
	SingleAndMultiplePassanges = 'Single And Multiple Passanges'
}

const ExerciseSchema = new Schema({
	title: {
		type: String,
		default: ''
	},
	questionCategory: {
		type: String,
		enum: ExerciseQuestionCategory,
		required: true
	},
	isTopicComponent: {
		type: Boolean,
		default: false
	},
	paragraph: {
		type: String
	},
	sound: {
		type: String
	},
	image: {
		type: String
	},
	questions: [{
		type: Schema.Types.ObjectId,
		ref: 'Questions'
	}],
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

// Compile model from schema
export const ExerciseModel = model<ExerciseDocument>('Exercises', ExerciseSchema);