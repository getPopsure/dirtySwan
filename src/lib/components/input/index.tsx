import React from 'react';

import styles from './style.module.scss';

// Something weird is going on with enterKeyHint that makes it a required field under certain circumstances. The & Omit<…> and & Pick<…> is a hacky way to go around that.
export type InputProps = { hasError?: boolean; prefix?: string } & Omit<
  JSX.IntrinsicElements['input'],
  'enterKeyHint'
> &
  Partial<Pick<JSX.IntrinsicElements['input'], 'enterKeyHint'>>;

export default React.forwardRef(
  (
    { className, placeholder, prefix, ...props }: InputProps,
    ref?: React.ForwardedRef<HTMLInputElement>
  ) => (
    <div className={`${styles.container} ${className ?? ''}`}>
      <input
        data-testid="ds-input-input"
        type="text"
        ref={ref}
        className={`${props.hasError ? 'p-input--error' : 'p-input'} ${
          placeholder && placeholder?.length > 0
            ? styles.input
            : styles['input--no-placeholder']
        } ${prefix ? styles['input--with-prefix'] : ''}`}
        placeholder=" "
        {...props}
      />
      {prefix && <span className={styles.prefix}>{prefix}</span>}
      <span
        className={`${styles.placeholder} ${
          prefix ? styles['placeholder--with-prefix'] : ''
        }`}
      >
        {placeholder}
      </span>
    </div>
  )
);
