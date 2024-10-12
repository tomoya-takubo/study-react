import { Headline } from './Headline'

export const Main = ({ page, children }) => {
  return (
    <main>
      <Headline page={page}>
        {children}
      </Headline>
    </main>
  );
}