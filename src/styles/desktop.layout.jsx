import Navbar from "../components/navbar";
import { PageContainer, ImageContainer } from "./sharedStyles";

const DesktopLayout = ({ bg, children }) => {
  return (
    <PageContainer>
      <ImageContainer img={bg}>
        <Navbar />
        {children}
      </ImageContainer>
    </PageContainer>
  );
};

export default DesktopLayout;
