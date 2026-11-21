import { describe, expect, it } from "vitest";
import {
  evaluateIncomingFiles,
  isAllowedDrawingName,
  safeFileName,
  verifyUploadedFiles,
} from "@/lib/rfq/files";

describe("drawing file rules", () => {
  it("accepts the drawing extensions we publish", () => {
    for (const name of ["part.dxf", "part.dwg", "part.step", "part.stp", "part.pdf", "PART.PDF"]) {
      expect(isAllowedDrawingName(name)).toBe(true);
    }
  });

  it("rejects other types and double extensions", () => {
    expect(isAllowedDrawingName("notes.txt")).toBe(false);
    expect(isAllowedDrawingName("file.pdf.exe")).toBe(false);
    expect(isAllowedDrawingName("file.exe.pdf")).toBe(false);
    expect(isAllowedDrawingName("part.01.dxf")).toBe(true);
  });

  it("keeps names inside a safe path segment", () => {
    expect(safeFileName("../Panel A.dxf")).toBe("Panel_A.dxf");
  });

  it("stops at 8 files and 20 MB", () => {
    const existing = Array.from({ length: 8 }, (_, index) => ({
      name: `part-${index}.dxf`,
      size: 1000,
    }));
    const result = evaluateIncomingFiles(existing, [{ name: "extra.dxf", size: 1000 }]);
    expect(result.accepted).toHaveLength(8);
    expect(result.errors[0]).toMatch(/8 files/);

    const oversized = evaluateIncomingFiles([], [{ name: "big.dxf", size: 20 * 1024 * 1024 + 1 }]);
    expect(oversized.accepted).toHaveLength(0);
    expect(oversized.errors[0]).toMatch(/20 MB/);
  });

  it("rejects an upload that is missing or over the size limit", () => {
    const expected = [{ path: "id/0-part.dxf", name: "part.dxf", size: 10 }];
    expect(verifyUploadedFiles(expected, []).ok).toBe(false);
    expect(verifyUploadedFiles(expected, [{ name: "0-part.dxf", size: 21 * 1024 * 1024 }]).ok).toBe(false);
    expect(verifyUploadedFiles(expected, [{ name: "0-part.dxf", size: 10 }]).ok).toBe(true);
  });
});
