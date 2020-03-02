let questions = [];

class Question {
  constructor(data) {
    Object.assign(this, data);
  }
}

const findTwoOthers = (questionType, answer, allPeople) => {

  let others = allPeople.filter((person) => {
    return person !== answer;
  });

  let potentials = [];
  if (questionType === 'NAME') {
    potentials = others.filter((person) => {
      return (person.firstname !== answer.firstName) && (person.lastName !== answer.lastName);
    })
  }

  if (questionType === 'POSITION') {
    potentials = others.filter((person) => {
      return (person.position !== answer.position);
    })
  }

  if (questionType === 'CITY') {
    potentials = others.filter((person) => {
      return (person.city !== answer.city);
    })
  }

  if (potentials.length >=2 ) {
    return potentials.slice(0,2); // take the first 2 (randomize this)
  } else {
    return potentials;
  }

}

const getAnswerForQuestion = (questionType, allPeople) => {
  let randomIdx = ((Math.random() * 10).toFixed(0)) % allPeople.length;
  let answer = allPeople[randomIdx];
  console.log('answer', answer);
  let others = findTwoOthers(questionType, answer, allPeople);
  console.log("others", others)

  if (others.length !== 2) {
    console.log('UH OH ' + others.length);
  //   getAnswerForQuestion(questionType, allPeople); // try again --- endless loop?
  }

  return {
    person: answer,
    people: [answer, ...others]
  }

}

const generateQuestions = (allPeople) => {
  let q = new Question({
    ...getAnswerForQuestion('POSITION', allPeople)
  });
  q.questionText = getQuestionText('POSITION', q.person);
  questions.push(q);

  q = new Question({
    ...getAnswerForQuestion('NAME', allPeople),
  });
  q.questionText = getQuestionText('NAME', q.person);
  questions.push(q);

  q = new Question({
    ...getAnswerForQuestion('CITY', allPeople),
  });
  q.questionText = getQuestionText('CITY', q.person);
  questions.push(q);

  q = new Question({
    ...getAnswerForQuestion('NAME', allPeople),
  });
  q.questionText = getQuestionText('NAME', q.person);
  questions.push(q);

  q = new Question({
    ...getAnswerForQuestion('POSITION', allPeople),
  });
  q.questionText = getQuestionText('POSITION', q.person);
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

export {
  generateQuestions
}