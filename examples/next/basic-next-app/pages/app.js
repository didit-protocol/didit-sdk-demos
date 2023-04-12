import dynamic from 'next/dynamic';

const DynamicDiditProviderComponent = dynamic(() => import('../components/Didit/Provider').then(mod => mod.DiditProviderComponent), { ssr: false });

function MyApp({ Component, pageProps }) {
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

export default MyApp;