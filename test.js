import { describe, expect, it } from "vitest";

describe("issue with FormData in jsdom", () => {
  it("should not throw an error", () => {
    // Test implementation
    const form = new FormData();
    const key = "prop";
    const value = { toDo: "¯_(ツ)_/¯" };

    const json = JSON.stringify(value);
    const data = new Blob([json], { type: "application/json" });
    
    // set the Blob in FormData
    form.set(key, data);

    // get the Blob back from FormData
    const retrievedBlob = form.get(key);

    // this fails, as retrievedBlob is a string
    expect(retrievedBlob).toBeInstanceOf(Blob);
  });
});