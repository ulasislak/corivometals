import { completeRfq } from "@/lib/rfq/service";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export function POST(request: Request): Promise<Response> {
  return completeRfq(request);
}
