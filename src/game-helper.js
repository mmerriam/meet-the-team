import random from 'lodash.random';
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

  let filterFn = undefined;

  if (questionType === 'NAME') {
    filterFn = (person) => {
      return (person.firstname !== answer.firstName) && (person.lastName !== answer.lastName);
    };
  }

  if (questionType === 'POSITION') {
    filterFn = (person) => {
      return (person.position !== answer.position);
    };
  }

  if (questionType === 'CITY') {
    filterFn = (person) => {
      return (person.city !== answer.city);
    };
  }

  let potentials = others.filter(filterFn);

  if (potentials.length > 2) {
    let rnd =  random(potentials.length - 1);
    if (rnd >= potentials.length-1) {
      rnd = rnd-2;
    }
    return potentials.slice(rnd, rnd+2);
  } else {
    return potentials;
  }

}

const getAnswerForQuestion = (questionType, allPeople) => {
  let randomIdx = random(allPeople.length - 1);
  let answer = allPeople[randomIdx];

  let others = findTwoOthers(questionType, answer, allPeople);
  if (others.length !== 2) {
    console.log('UH OH ' + others.length);
    // getAnswerForQuestion(questionType, allPeople); // try again --- endless loop?
  }

  let people = [answer, ...others];
  let randomShift = random(2);

  for (let i=0; i<=randomShift; i++) {
    people.push(people.shift());
  }

  return {
    person: answer,
    people
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
      const name = `${person.firstName} ${person.lastName}`;
      return `Which of these people is ${name}?`; 

    case 'POSITION': return `Which of these people has the role of ${person.position}?`;
    case 'CLIENT': return `Which of these people works at ${person.client}?`;

    case 'COUNTRY': 
      return `Which of these people works in ${person.country}?`;
    case 'CITY':
    default : 
      return `Which of these people works in ${person.city}?`;
    
  }
}

export {
  generateQuestions
}