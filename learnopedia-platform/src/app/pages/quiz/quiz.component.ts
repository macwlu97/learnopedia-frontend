import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Quiz Mode</h2>
    <p>Here you can implement fill-in-the-blanks or letter-reveal exercises.</p>
  `,
})
export class QuizComponent {}
