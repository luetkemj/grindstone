const weeks = [
  {
    name: 'Monday',
    goal: 6,
    actual: 0,
    variance: -6,
  },
  {
    name: 'Tuesday',
    goal: 6,
    actual: 5,
    variance: -1,
  },
  {
    name: 'Wednesday',
    goal: 6,
    actual: 6.1,
    variance: 0.1,
  },
  {
    name: 'Thursday',
    goal: 6,
    actual: 5.9,
    variance: -0.1,
  },
  {
    name: 'Friday',
    goal: 6,
    actual: 7.1,
    variance: 1.1,
  },
  {
    name: 'Saturday',
    goal: 6,
    actual: 6,
    variance: 0,
  },
  {
    name: 'Sunday',
    goal: 6,
    actual: 7,
    variance: 1,
  },
];

const initialState = {
  weeks,
};

export default function weekReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
