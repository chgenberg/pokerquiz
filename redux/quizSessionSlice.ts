// TODO: Skapa Redux slice för quiz-session
// - Håll quizBatch, frågor, svar, timer, state (lobby/play/result)
// - Actions: startQuiz, answerQuestion, finishQuiz, resetQuiz

// Exempel med Redux Toolkit:
// import { createSlice } from '@reduxjs/toolkit';
//
// interface QuizSessionState {
//   quizBatch: any | null;
//   answers: number[];
//   timer: number;
//   state: 'lobby' | 'play' | 'result';
//   streak: number;
//   flawless: boolean;
// }
//
// const initialState: QuizSessionState = {
//   quizBatch: null,
//   answers: [],
//   timer: 0,
//   state: 'lobby',
//   streak: 0,
//   flawless: false,
// };
//
// const quizSessionSlice = createSlice({
//   name: 'quizSession',
//   initialState,
//   reducers: {
//     startQuiz(state, action) {
//       state.quizBatch = action.payload;
//       state.answers = [];
//       state.timer = 0;
//       state.state = 'play';
//       state.flawless = false;
//     },
//     answerQuestion(state, action) {
//       state.answers.push(action.payload);
//     },
//     finishQuiz(state, action) {
//       state.state = 'result';
//       state.flawless = action.payload.flawless;
//       if (action.payload.streak !== undefined) {
//         state.streak = action.payload.streak;
//       }
//     },
//     resetQuiz(state) {
//       state.quizBatch = null;
//       state.answers = [];
//       state.timer = 0;
//       state.state = 'lobby';
//       state.flawless = false;
//     },
//   },
// });
//
// export const { startQuiz, answerQuestion, finishQuiz, resetQuiz } = quizSessionSlice.actions;
// export default quizSessionSlice.reducer; 