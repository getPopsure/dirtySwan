import {
  associatedClassForCardState,
  CardProps,
  headingForTitleSize,
} from '..';
import { Icon, arrowRight } from '../icons';

import styles from './style.module.scss';

export default ({
  className,
  title,
  titleSize = 'medium',
  children,
  topIcon,
  rightIcon,
  state = 'actionable',
  ...props
}: CardProps & {
  topIcon: Icon;
  titleSize?: 'small' | 'medium' | 'big';
  rightIcon?: 'arrow' | Icon;
}) => (
  <>
    <div
      className={`d-flex ${associatedClassForCardState(state)} ${
        styles.container
      } ${className ?? ''}`}
      {...props}
    >
      <img width="48xp" height="48px" alt={topIcon.alt} src={topIcon.src} />
      <div className="d-flex mt16">
        <div className={headingForTitleSize(titleSize)}>{title}</div>
        {rightIcon && (
          <img
            className={styles['right-icon']}
            width="24px"
            height="24px"
            src={rightIcon === 'arrow' ? arrowRight.src : rightIcon.src}
            alt={rightIcon === 'arrow' ? arrowRight.alt : rightIcon.alt}
          />
        )}
      </div>
      <p className="p-p mt16">{children}</p>
    </div>
  </>
);