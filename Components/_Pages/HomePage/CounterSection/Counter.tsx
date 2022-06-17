import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import appTheme from "../../../../styles/appTheme";
import countdown, { TimeObject } from "../../../../utils/countdown-function";
import Loader from "../../../Common/Loader";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.div`
  color: ${appTheme.colors.tertiary.default};
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${appTheme.queries.tabletAndUp} {
    flex-direction: row;
  }

  /* TimeUnitContainer - DD/HH/MM/SS */
  & > div:nth-of-type(2),
  & > div:nth-of-type(3) {
    @media ${appTheme.queries.tabletAndUp} {
      margin: 0 16px;
    }
  }
`;

const TimeUnitContainer = styled.div`
  display: flex;
  align-items: baseline;
  font-size: ${appTheme.fontSize.xl};

  span {
    color: ${appTheme.colors.secondary.lighter};
  }
`;

const TimeUnit = styled.div`
  margin-right: 6px;
  font-size: ${appTheme.fontSize.xl2};

  @media ${appTheme.queries.tabletAndUp} {
    font-size: ${appTheme.fontSize.xl4};
  }

  @media ${appTheme.queries.laptopAndUp} {
    font-size: ${appTheme.fontSize.xl6};
  }
`;

const Counter = () => {
  const [timeToMidnight, setTimeToMidnight] = useState<TimeObject | null>(null);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setTimeToMidnight(countdown());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(intervalID);
  });

  // Return Null if timeUnit is undefined - SSR
  if (
    !timeToMidnight?.days &&
    !timeToMidnight?.hours &&
    !timeToMidnight?.minutes &&
    !timeToMidnight?.seconds
  )
    return <Loader />;

  return (
    <Container>
      <Heading>Election ends in :</Heading>
      <CounterContainer>
        <TimeUnitContainer>
          <TimeUnit>
            {Number(timeToMidnight?.days) > 0 ? timeToMidnight?.days : null}
          </TimeUnit>
          <span>{Number(timeToMidnight?.days) > 0 ? "days" : null}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.hours}</TimeUnit>
          <span>{Number(timeToMidnight?.hours) > 1 ? "hours" : "hour"}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.minutes}</TimeUnit>
          <span>
            {Number(timeToMidnight?.minutes) > 1 ? "minutes" : "minute"}
          </span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.seconds}</TimeUnit>
          <span>
            {Number(timeToMidnight?.seconds) > 1 ? "seconds" : "second"}
          </span>
        </TimeUnitContainer>
      </CounterContainer>
    </Container>
  );
};

export default Counter;
