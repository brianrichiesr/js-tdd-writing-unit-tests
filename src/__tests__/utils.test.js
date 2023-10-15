import { pointsForWord } from "../utils";

describe("pointsForWord", () => {
    it("calculates the total points for a word (1 point per vowel, 2 per consonant)", () => {
        // Arrange
        const word = "test";
        // Act
        const points = pointsForWord(word);
        // Assert
        expect(points).toBe(7);
    })
    it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
      
        const points = pointsForWord(word);
      
        expect(points).toBe(7);
      });
})
