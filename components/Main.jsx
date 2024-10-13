import { Headline } from './Headline'
import classes from './Main.module.css'

export const Main = ({ page, children }) => {
  return (
    <main>
      <Headline page={page}>
        {children}
      </Headline>
    </main>
  );
}