// Determin the type of triangle
// Assign values to side_1, side_2, side_3
const side_1 = 5
const side_2 = 5
const side_3 = 5

// Write an if statment that classifies the type of triangle based on the values of side_1, side_2, side_3
if (side_1===side_2 && side_2===side_3){
    console.log('Equalateral triangle')
} else if (side_1===side_2||side_1===side_3||side_2===side_3){
    console.log('Isosceles triangle')
} else{
    console.log('Scalene trianlge')
}