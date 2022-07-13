import navLinks from "../../../data/navLinks";
import Page404Illustration from "../../Illustrations/Page404Illustration";
import Page500Illustration from "../../Illustrations/Page500Illustration";
import LinkButton from "../../LinkButton";
import StyledErrorPagesContainer from "../../StyledComponents/StyledErrorPagesContainer";
import StyledH1 from "../../StyledComponents/StyledH1";
import StyledPageMain from "../../StyledComponents/StyledPageMain";

const ErrorPage = ({ errorCode }: ErrorPageProps) => {
  return (
    <StyledPageMain>
      <StyledErrorPagesContainer>
        <StyledH1>Error</StyledH1>
        {errorCode === "404" ? (
          <Page404Illustration />
        ) : (
          <Page500Illustration />
        )}
        <LinkButton href={navLinks.home.href}>Home</LinkButton>
      </StyledErrorPagesContainer>
    </StyledPageMain>
  );
};

export default ErrorPage;

interface ErrorPageProps {
  errorCode: "404" | "500";
}
