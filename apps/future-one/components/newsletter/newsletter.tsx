import { Button } from '@future-one/ui';
import { useState } from 'react';
import styles from './newsletter.module.scss';

const newsletter = {
  heading: 'Subscribe to our newsletter',
  description: 'Chupa chups gummi bears shortbread candy',
  buttonLabel: 'Subscribe',
};

export const Newsletter = () => {
  const { heading, description, buttonLabel } = newsletter;
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
    setEmail('');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['wrapper']}>
        <h2 className={styles['heading']}>{heading}</h2>
        <form onSubmit={(e) => handleSubmit(e)} className={styles['form']}>
          <input
            aria-label="Company e-mail address"
            name="email-address"
            placeholder="Company e-mail address"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e?.currentTarget?.value)}
            className={styles['email-input']}
          />
          <Button
            type="submit"
            variant="outline"
            className={styles['form-button']}
          >
            {buttonLabel}
          </Button>
        </form>
        <p>{description}</p>
      </div>
    </div>
  );
};
