import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const DynamicDiditProviderComponent = dynamic(
  () =>
    import("../components/Didit/Provider").then(
      (mod) => mod.DiditProviderComponent
    ),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <div>
        <DynamicDiditProviderComponent>
          <Component {...pageProps} />
        </DynamicDiditProviderComponent>
      </div>
    </main>
  );
}
