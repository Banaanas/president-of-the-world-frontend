import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Loader from "react-loader-spinner";
import appTheme from "../../../styles/appTheme";
import countdown from "../../../utils/countdown-function";

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
  gap: 16px;
`;

const TimeUnitContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: baseline;
  font-size: ${appTheme.fontSize.xl};

  span {
    color: ${appTheme.colors.secondary.lighter};
  }
`;

const TimeUnit = styled.div`
  font-size: ${appTheme.fontSize.xl2};

  @media ${appTheme.queries.tabletAndUp} {
    font-size: ${appTheme.fontSize.xl4};
  }

  @media ${appTheme.queries.laptopAndUp} {
    font-size: ${appTheme.fontSize.xl6};
  }
`;

const Counter = () => {
  const [timeToMidnight, setTimeToMidnight] = useState(null);

  useEffect(() => {
    const intervalID = setTimeout(() => {
      setTimeToMidnight(countdown());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(intervalID);
  });

  // Return Null if timeUnit is undefined
  if (
    !timeToMidnight?.days &&
    !timeToMidnight?.hours &&
    !timeToMidnight?.minutes &&
    !timeToMidnight?.seconds
  )
    return <Loader type="Puff" color="white" height={100} width={100} />;

  return (
    <Container>
      <Heading>Elections end in :</Heading>
      <CounterContainer>
        <TimeUnitContainer>
          <TimeUnit>
            {timeToMidnight?.days > 0 ? timeToMidnight?.days : null}
          </TimeUnit>
          <span>{timeToMidnight?.days > 0 ? "days" : null}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.hours}</TimeUnit>
          <span>{timeToMidnight?.hours > 1 ? "hours" : "hour"}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.minutes}</TimeUnit>
          <span>{timeToMidnight?.minutes > 1 ? "minutes" : "minute"}</span>
        </TimeUnitContainer>
        <TimeUnitContainer>
          <TimeUnit>{timeToMidnight?.seconds}</TimeUnit>
          <span>{timeToMidnight?.seconds > 1 ? "seconds" : "second"}</span>
        </TimeUnitContainer>
      </CounterContainer>
    </Container>
  );
};

export default Counter;
