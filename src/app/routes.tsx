import { createMemoryRouter } from "react-router";
import { DrawingCanvas } from "./components/DrawingCanvas";
import { Garden } from "./components/Garden";
import { Success } from "./components/Success";
import { Layout } from "./components/Layout";
import { PlantFlower } from "./components/PlantFlower";
import { EmotionSelect } from "./components/EmotionSelect";
import { Onboarding } from "./components/Onboarding";
import { Profile } from "./components/Profile";

function withLayout(Component: React.ComponentType) {
  return function LayoutWrapper() {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  };
}

export const router = createMemoryRouter([
  {
    path: "/",
    Component: Onboarding,
  },
  {
    path: "/garden",
    Component: withLayout(Garden),
  },
  {
    path: "/emotion",
    Component: withLayout(EmotionSelect),
  },
  {
    path: "/draw",
    Component: withLayout(DrawingCanvas),
  },
  {
    path: "/plant",
    Component: withLayout(PlantFlower),
  },
  {
    path: "/success",
    Component: withLayout(Success),
  },
  {
    path: "/profile",
    Component: withLayout(Profile),
  },
]);
