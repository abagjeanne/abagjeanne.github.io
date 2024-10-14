import {
  About,
  Avatar,
  Contact,
  Home,
  Portfolio,
  Resume,
} from "@/components/sections";
import {
  ContentArea,
  Header,
  LayoutContainer,
  Sidebar,
} from "@/components/layout";

function App() {
  return (
    <LayoutContainer>
      <div className="flex lg:flex-row flex-col">
        <Sidebar>
          <Avatar />
        </Sidebar>
        <ContentArea>
          <Header />
          <Home />
          <Portfolio />
          <About />
          <Resume />
          <Contact />
        </ContentArea>
      </div>
    </LayoutContainer>
  );
}

export default App;
