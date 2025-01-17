import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { DivProps } from '@/types';

import { useStyles } from './style';

export interface SpotlightCardItemProps extends DivProps {
  borderRadius: number;
  size: number;
}

const SpotlightCardItem = memo<SpotlightCardItemProps>(
  ({ children, className, style, borderRadius, size, ...rest }) => {
    const { styles, cx } = useStyles({ borderRadius, size });

    return (
      <div
        className={cx(styles.itemContainer, className)}
        style={{ borderRadius, ...style }}
        {...rest}
      >
        <Flexbox className={styles.content}>{children}</Flexbox>
      </div>
    );
  },
);

export default SpotlightCardItem;
