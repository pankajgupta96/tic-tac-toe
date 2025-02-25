# Tic-Tac-Toe Game with Move History & Validation

## 📌 Overview
This project is a simple **Tic-Tac-Toe game** where users can input a number (0-8) to place **X or O** in a 3x3 grid. It includes **move history tracking** and **input validation** to ensure only valid numbers are entered.

---

## 🛠 Features
✅ **Turn-based Play**: Players take turns to place "X" and "O".  
✅ **Move History**: The game stores the last 5 moves and removes the oldest move when exceeded.  
✅ **Input Validation**:  
   - If the user enters a number **less than 0 or greater than 8**, an **error message** is shown, and the input is cleared.  
   - The **border of the input field turns red** when invalid input is entered.  
✅ **Grid Highlighting**: The selected cell changes color after a move.  
✅ **Prevention of Overwriting**: If a cell is already occupied, the move is not allowed.  

---

## 📂 Project Structure


---

## 📜 How to Use
1. **Enter a number** between **0-8** in the input field.
2. **Click on "X"** or **"O"** to place the mark in the respective cell.
3. **Invalid Input Handling**:
   - If the number is **out of range**, a **red border & error message** will appear.
   - The input field will be cleared automatically.
4. **Turn-based System**:
   - **"X" goes first**, then "O".
   - Buttons are **disabled/enabled alternately** after each move.
5. **Move History**:
   - After **5 moves**, the oldest move is removed automatically.

---

## 🎨 UI Explanation
- The **grid** consists of **9 cells (0-8)**, each containing a `div.draw` for marking moves.
- The **input field** accepts numbers **(0-8)**.
- **Two buttons (`X` and `O`)** allow players to take turns.
- **Error messages** appear below the input field when necessary.

---


