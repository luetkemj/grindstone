import React from 'react';

import Day from '../../../components/day/day.component';

export default function DayTestComponent() {
  return (
    <div>
      <h1>On Target</h1>
      <Day name={"M"} goal={6} actual={6} variance={0} />

      <h1>Below Target</h1>
      <Day name={"M"} goal={6} actual={5} variance={-0.1} />

      <h1>Beyond Target</h1>
      <Day name={"M"} goal={6} actual={7} variance={1} />
    </div>
  );
}
