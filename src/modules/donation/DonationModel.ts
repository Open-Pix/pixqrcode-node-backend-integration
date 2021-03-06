import mongoose, { Document, Model } from "mongoose";
export const DONATION_STATUS = {
  OPEN: "OPEN",
  PAIED: "PAIED",
};

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      description: "name of this pix qrcode in cents",
      index: true,
      trim: true,
    },
    identifier: {
      type: String,
      description: "identifier of this pix qrcode in cents",
      index: true,
      trim: true,
    },
    value: {
      type: Number,
      description: "value of this pix qrcode in cents",
    },
    comment: {
      type: String,
      description: "comments about this pix qrcode",
      index: true,
      trim: true,
    },
    brCode: {
      type: String,
      description: "brcode of this donation",
    },
    status: {
      type: String,
      default: DONATION_STATUS.OPEN,
      enum: Object.values(DONATION_STATUS),
      index: true,
      description: "The status of this charge",
    },
  },
  {
    collection: "Donation",
    timestamps: true,
  }
);

export interface IDonation extends Document {
  name: string;
  identifier: string;
  value: number;
  comment: string;
  brCode: string;
  createdAt: Date;
  updatedAt: Date;
}

const DonationModel: Model<IDonation> = mongoose.model("Donation", Schema);

export default DonationModel;
