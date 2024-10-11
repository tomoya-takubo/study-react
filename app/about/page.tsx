import { Links } from '../../components/Links';
import { Footer } from '../../components/Footer';
import { Headline } from '../../components/Headline';


export default function Home() {
  return (
    <div>
      <h1>アバウトページ</h1>
      <Links />
      <Headline page="about" />
      <Footer />
    </div>
  );
}