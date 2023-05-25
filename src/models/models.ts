import { Schema, Types, model } from "mongoose";

export interface IResearch {
	company_name: string;
	Q_A: Types.ObjectId;

	General_Questions: {
		Q1: Date;
		Q2: Date;
		Q3: number;
		Q4: number;
		Q5: number;
		Q6: number;
		Q7: number;
		Q8: number;
		Q9: number;
		Q10: number;
		Q11: number;
		Q12: number;
		Q13: number;
		Q14: Boolean;
		Q15: number;
		Q16: Date;
		Q17: number;
		Q18: {
			ProductA: number;
			ProductB: number;
			ProductC: number;
			ProductD: number;
			ProductE: number;
			ProductF: number;
		};
		Q19: {
			Employees: number;
			R_D: number;
			G_A: number;
			Sales_Marketing: number;
			Technology: number;
			other_cost: number;
		};
		Q20: number;
		Q21: {
			Database: number;
			IT_Infrastructure: number;
			Comp_Equipment: number;
			Other_Assets: number;
		};
	};
}

const ResearchSchema = new Schema<IResearch>(
	{
		company_name: {
			type: String,
			required: true,
		},
		Q_A: { type: Schema.Types.ObjectId, ref: "Q_A" },
		General_Questions: {
			Q1: {
				type: Date,
				required: true,
			},
			Q2: {
				type: Date,
				required: true,
			},
			Q3: {
				type: Number,
				required: true,
			},
			Q4: {
				type: Number,
				required: true,
			},
			Q5: {
				type: Number,
				required: true,
			},
			Q6: {
				type: Number,
				required: true,
			},
			Q7: {
				type: Number,
				required: true,
			},
			Q8: {
				type: Number,
				required: true,
			},
			Q9: {
				type: Number,
				required: true,
			},
			Q10: {
				type: Number,
				required: true,
			},
			Q11: {
				type: Number,
				required: true,
			},
			Q12: {
				type: Number,
				required: true,
			},
			Q13: {
				type: Number,
				required: true,
			},
			Q14: {
				type: Boolean,
				required: true,
			},
			Q15: {
				type: Number,
				required: true,
			},
			Q16: {
				type: Date,
				required: true,
			},
			Q17: {
				type: Number,
				required: true,
			},
			Q18: {
				ProductA: {
					type: Number,
				},
				ProductB: {
					type: Number,
				},
				ProductC: {
					type: Number,
				},
				ProductD: {
					type: Number,
				},
				ProductE: {
					type: Number,
				},
				ProductF: {
					type: Number,
				},
			},
			Q19: {
				Employees: {
					type: Number,
				},
				R_D: {
					type: Number,
				},
				G_A: {
					type: Number,
				},
				Sales_Marketing: {
					type: Number,
				},
				Technology: {
					type: Number,
				},
				other_cost: {
					type: Number,
				},
			},
			Q20: {
				type: Number,
			},
			Q21: {
				Database: {
					type: Number,
				},
				IT_Infrastructure: {
					type: Number,
				},
				Comp_Equipment: {
					type: Number,
				},
				Other_Assets: {
					type: Number,
				},
			},
		},
	},
	{
		toJSON: {
			transform(_doc, ret) {
				ret.id = ret._id;
				delete ret._id;
				delete ret.__v;
			},
		},
	},
);

export const Research = model<IResearch>("Research", ResearchSchema);
