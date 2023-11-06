// var student1name = "Tonye";
// var student1Gender = "Male";
// var student1Email = "tonye@gmail.com";
// var student1isGraduated = false;

// var student1name = "Afolabi";
// var student1Gender = "Male";
// var student1Email = "breezy@gmail.com";
// var student1isGraduated = false;

// // objects best practice
// var student1 = {
//     name: "Tonye",
//     gender: "Male",
//     email: "tonye@gmail.com",
//     isGraduated: false,
// };

// var student2 = {
//     name: "Afolabi",
//     gender: "Male",
//     email: "breezy@gmail.com",
//     isGraduated: false,
// };
// // console.log(student1);
// // console.log(student1.name) access single item, name is the key,
// // Tonye is the value. Structure of a proper object key value pair.

// // Arrays
// var students = [
//     {
//       name: "Tonye",
//       gender: "Male",
//       email: "tonye@gmail.com",
//       isGraduated: false,
//     },
//     {
//         name: "Afolabi",
//         gender: "Male",
//         email: "breezy@gmail.com",
//         isGraduated: false,
//     },
//     {
//         name: "Tosin",
//         gender: "Male",
//         email: "breezy@gmail.com",
//         isGraduated: false,
//     },
//     {
//         name: "Adeleke",
//         gender: "Male",
//         email: "breezy@gmail.com",
//         isGraduated: false,
//     }
// ];

// // console.log(students);
// // console.log(students[1]); console index [] of an array starts from 0

// // LOOPS
// // for loop
// // for (var index = 0; index < students.length; index++) {
// //  console.log(students[index]);
// // }

// for (index in students) {
//     console.log(students[index]);
// }
// // students is the name of the array, while length is the length of the array

// var students = [
//     {
//         name: "Tonye",
//         gender: "Male",
//         email: "tonye@gmail.com",
//         isGraduated: false,
//         score: 70,
//     },
//     {
//         name: "Afolabi",
//         gender: "Male",
//         email: "breezy@gmail.com",
//         isGraduated: false,
//         score: 65,
//     },
//     {
//         name: "Habeeb",
//         gender: "Male",
//         email: "tonye@gmail.com",
//         isGraduated: false,
//         score: 55,
//     },
//     {
//         name: "Adeleke",
//         gender: "Male",
//         email: "tonye@gmail.com",
//         isGraduated: false,
//         score: 60,
//     },
//     ];
      
//     function calculateAvgScore() {
//         var totalScore = 0;
//         var averagescore= 0;
//         for (var i=0; i< students.length; i++) {
//             totalScore += students[i].score;   
//          }
//          return(averagescore = totalScore / students.length);
//         }
    
//         console.log(calculateAvgScore())


var sentence = "hello world, how are you doing today?";
var sentlen = 0;
var wordcount = 1;
var vowelCount = 0;
var vowel = "aeiou";

for (var i = 0; i < sentence.length; i++) {
    if (vowel.includes(sentence[i])) {
        vowelCount += 1;
    }

    if (sentence[i] === " ") {
        sentlen = sentLen;
        wordCount += 1;
    } else if (sentence[i] === ",") {
        sentLen = sentLen;
    } else {
        sentLen += 1;
    }
}

console.log(sentLen);
console.log(wordCount);
console.log(vowelCount);