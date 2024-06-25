import { Component } from '@angular/core';

@Component({
  selector: 'app-mcq-questions',
  templateUrl: './mcq-questions.component.html',
  styleUrls: ['./mcq-questions.component.css']
})
export class McqQuestionsComponent {

  questions = [
    {
      text: 'The Child Helpline 1098 is set to be consolidated with which helpline?',
      options: ['100', '101', '112', '1091'],
      answer: 112,
      selected: null
    },
    {
      text: 'The Livestock and Livestock Products Bill 2023 categorizes livestock as which entity?',
      options: ['Life', 'Commodity', 'Product', 'Asset'],
      answer: 'commodity',
      selected: null
    },
    {
      text: 'Which freedom fighter launched the Rampa Rebellion against the British in 1922?',
      options: ['Mahatma Gandhi', 'Alluri Sitarama Raju', 'Pottu Sriramalu', ' Velu Nachiyar'],
      answer: 'Alluri Sitarama Raju',
      selected: null
    },
    {
      text: 'Which is the first state/UT to introduce trial runs of buses powered by hydrogen?',
      options: ['West Bengal', 'Assam', 'New Delhi', 'Tamil Nadu'],
      answer: 'New Delhi',
      selected: null
    },
    {
      text: 'The Centralised aviation security control centre has been inaugurated in which state/UT?',
      options: ['New Delhi', 'Maharashtra', 'Punjab', 'Sikkim'],
      answer: 'New Delhi',
      selected: null
    }
  ];

  
  GetSelectedOptions() {
    this.questions.forEach((val:any) => {
      console.log(val.options[val.selected]);
    })
  }

  GetAnswerCorrect() {
    console.log(this.questions.map(val => val.answer == val.selected));
  }

  GetScore() {
    console.log(this.questions.reduce((acc, val) => {
      return acc + (val.answer == val.selected ? 1 : 0);
    }, 0));
  }

}
