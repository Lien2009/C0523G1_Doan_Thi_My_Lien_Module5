const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    gender: 'male',
    city: 'New York',
    hobies: ['reading', 'traveling', 'photography'],
    languages: ['English', 'Spanish'],
    education: {
        degree: 'Bachelor',
        major: 'CS',
        university: 'Harvard'
    }
};
const [language] = person.languages;
const {firstName, gender, education: {degree}} = person;
const student = {
    firstName: firstName,
    gender: gender,
    degree: degree,
    english: language
}
console.log(student);