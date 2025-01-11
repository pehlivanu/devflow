/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
// Copy this template file and rename "Model" everyehere to match the name of the model,
// and optionally write the models?.NewModel with lowercase in the second-last line of the code
import { model, models, Schema, Types, Document } from "mongoose";

export interface IModel {}

export interface IModelDoc extends IModel, Document {}
const ModelSchema = new Schema<IModel>({}, { timestamps: true });

const Model = models?.Model || model<IModel>("Model", ModelSchema);

export default Model;
