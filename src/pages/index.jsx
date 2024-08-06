import Wrapper from "@/layout/Wrapper";
import HomeComponent from "@/components/home-1";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Abroadium AI Enabled Job Portal",
  description: "Abroadium AI Enabled Job Portal",
};

export default function Home() {
  return (
    <Wrapper>
    <MetaComponent meta={metadata} />
      <HomeComponent />
    </Wrapper>
  );
}
