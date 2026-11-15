// Which address shows which page.
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { site } from "@/content/site";
import { worlds } from "@/content/worlds";
import { AboutPage } from "@/pages/AboutPage";
import { ComingSoonPage } from "@/pages/ComingSoonPage";
import { WorldPage } from "@/pages/WorldPage";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to={site.homePage} replace />} />
        {worlds.map((world) => (
          <Route key={world.slug} path={`/worlds/${world.slug}`} element={<WorldPage world={world} />} />
        ))}
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<ComingSoonPage />} />
      </Route>
    </Routes>
  );
}
