import React, { useState } from "react";
import { TimeSplit } from "./typings/global";
import { tick } from "./utils/time";
import { useCssHandles } from "vtex.css-handles";
import { FormattedMessage } from "react-intl";

interface CountdownProps {
  title: string;
  targetDate: string;
}
const CSS_HANDLES = ["container", "countdown", "title"];
const DEFAULT_TARGET_DATE = new Date("2020-06-25").toISOString();

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE,
}) => {
  const [timeRemaining, setTime] = useState<TimeSplit>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const handles = useCssHandles(CSS_HANDLES);
  const titleText = <FormattedMessage id="countdown.title" />;
  tick(targetDate, setTime);
  return (
    <div
      className={`${handles.countdown} t-heading-2 fw3 w-100 c-muted-1 db tc`}
    >
      <div className={`${handles.title} db tc`}>{titleText}</div>
      <h1>{targetDate}</h1>
      <h1>{`${timeRemaining.hours}:${timeRemaining.minutes}:${timeRemaining.seconds}`}</h1>
    </div>
  );
};

Countdown.schema = {
  title: "editor.countdown.title",
  description: "editor.countdown.description",
  type: "object",
  properties: {
    title: {
      title: "Sou um título",
      type: "string",
      default: null,
    },
    targetDate: {
      title: "Data final",
      description: "Data final utilizada no contador",
      type: "string",
      default: null,
    },
  },
};

export default Countdown;
