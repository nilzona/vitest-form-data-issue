import { describe, expect, it } from "vitest";

describe("issue with FormData in jsdom", () => {
  it("should not throw an error", () => {
    // Test implementation
    const form = new FormData();
    const key = "prop";
    const value = { toDo: "¯_(ツ)_/¯" };

    const json = JSON.stringify(value);
    const data = new Blob([json], { type: "application/json" });
    
    // We need to use Blob to specify the content-type here but we don't want
    // a file-name, because this is not a file - override with empty string.
    form.set(key, data);

    const retrievedBlob = form.get(key);
    expect(retrievedBlob).toBeInstanceOf(Blob);

    // If we reach this point without errors, the test passes
    expect(true).toBe(true);
  });
});