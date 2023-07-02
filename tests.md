Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(0);
Expected Output: [0]

Test: "It should replace numbers that contain a "1" with "Beep"
Code: beepBoop(1)
Expected Output: [0,"Beep"]

Test: "It should replace numbers that contain a "2" with "Boop"
Code: beepBoop(2)
Expected Output: [0, "Beep", "Boop"]

Test: "It should replace numbers that contain a "3" with "Won't you be my neighbor"
Code: beepBoop(3)
Expected Output: [0, "Beep", "Boop", "Won't you be my neighbor"]

Test: "It should replace numbers that contain a "1" and "2" with "Beep"
Code: beepBoop(12)
Expected Output: ["0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!"]

Test: "It should replace numbers that contain a "1" and "3" with "Boop"
Code: beepBoop(13)
Expected Output: ["0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?"]

Test: "It should replace numbers that contain a "2" and "3" with "Won't you be my neighbor"
Code: beepBoop(23)
Expected Output: ["0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?"]

Test: "It should replace numbers that contain a "1", "2", and "3" with "Won't you be my neighbor"
Code: beepBoop(123)
Expected Output: ["0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Boop!, Boop!, Boop!, Boop!, Boop!, Boop!, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, Won't you be my neighbor?, 40, Beep!, Boop!, Won't you be my neighbor?, 44, 45, 46, 47, 48, 49, 50, Beep!, Boop!, Won't you be my neighbor?, 54, 55, 56, 57, 58, 59, 60, Beep!, Boop!, Won't you be my neighbor?, 64, 65, 66, 67, 68, 69, 70, Beep!, Boop!, Won't you be my neighbor?, 74, 75, 76, 77, 78, 79, 80, Beep!, Boop!, Won't you be my neighbor?, 84, 85, 86, 87, 88, 89, 90, Beep!, Boop!, Won't you be my neighbor?, 94, 95, 96, 97, 98, 99, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Won't you be my neighbor?"]