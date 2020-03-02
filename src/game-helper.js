let questions = [];

class Question {
  constructor(data) {
    Object.assign(this, data);
  }
}

const generateQuestions = (people) => {
  let person = people[0];
  let q = new Question({
    questionText: getQuestionText('POSITION', person),
    people: people,
    person: person,
    answeredCorrectly: undefined,

  });
  questions.push(q);
  return questions;
}

const getQuestionText = (questionType, person) => {
  switch(questionType) {

    case 'NAME': 
      const name = `${person.firstName} ${person.lastName}?`;
      return `Which of these people is ${name}?`; 

    case 'POSITION': return `Which of these people has the role of ${person.position}?`;

    case 'COUNTRY': 
      return `Which of these people works in ${person.country}?`;
    case 'STATE': 
      return `Which of these people works in ${person.state}?`;
    case 'CITY':
    default : 
      return `Which of these people works in ${person.city}?`;
    
  }
}

// const nextQuestion = () => {
//   const questionType = pickRandomQuestionType();

//   const name = `${data.people[0].firstName} ${data.people[0].lastName}?`;
//   return getQuestion(questionType, data.people[2])
// }

// const pickRandomQuestionType = () => {
//   return "NAME";
// }


export {
  generateQuestions
}