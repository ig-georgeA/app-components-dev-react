import styles from './child-view.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function ChildView() {
  const classes = createClassTransformer(styles);

  return (
    <>
      <div className={classes("row-layout child-view-container")}></div>
    </>
  );
}
