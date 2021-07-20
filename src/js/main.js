
// 
export default class GradeCalculator {

    constructor(values) {

        this.values = values;

        this.weights = this.values.map((item) => {
            return item.weight
        });

        this.grades = this.values.map((item) => {
            return item.grade;
        });

        this.total_weight = this.weights.reduce(function (previous, current) {
            return previous + current;
        }, 0);

        this.grade_parts = this.hello();


        this.final_grade = this.grade_parts.reduce(function (previous, current) {
            return previous + current;
        }, 0);





        // Auto Run
        this.weight_check = this.checkWeight();

    };






    // Check if all the weight add up to 100
    checkWeight() {
        if (this.total_weight > 100 || this.total_weight < 100 || this.total_weight < 0) {
            console.error("Invalid Total Grade weight:", this.total_weight)
        }

    };



    hello() {
        let temp = []
        for (let i = 0; i < this.values.length; i++) {
            temp.push((this.weights[i] / 100) * this.grades[i])
        }
        return temp;
    }

    finalGrade() {
        return parseFloat(this.final_grade.toFixed(2));
    }



};





