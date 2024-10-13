import classes from './Headline.module.css'

export const Headline = ({ page, children }) => {
  return (
    <div>
      <h1>
        {page} page
      </h1>
      {children}
    </div>
  );
}