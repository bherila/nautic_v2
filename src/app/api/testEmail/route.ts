import 'server-only'
import confirmationEmail from "@/lib/confirmationEmail";
import getServerSideStripe from "@/lib/getServerSideStripe";
import { NextRequest, NextResponse } from "next/server";

// noinspection JSUnusedGlobalSymbols
export async function POST(req: NextRequest) {
  const stripe = getServerSideStripe();
  const subResponse = await stripe.subscriptions.retrieve("sub_1ONtPnEOfmPupDO5cQwW8jc0");
  const emailResult = await confirmationEmail(
    subResponse,
    "test_payment_method_id",
  );
  return NextResponse.json({ emailResult });
}
